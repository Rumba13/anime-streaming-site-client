import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {injectable} from "inversify";
import rateLimit from "axios-rate-limit";

interface RetryConfig extends AxiosRequestConfig {
    retryCount?: number;
}

@injectable()
export class JikanClient {
    private readonly baseUrl: string = "https://api.jikan.moe/v4/";
    private readonly maxRetries: number = 4;
    private readonly initialDelay: number = 1000;

    public readonly connection = rateLimit(axios.create({baseURL: this.baseUrl}), {
        maxRPS: 3
    });

    constructor() {
        this.connection.interceptors.response.use(
            (response: AxiosResponse) => response,
            async (error: AxiosError) => {
                if (error.response?.status !== 429) {
                    return Promise.reject(error);
                }

                const config = error.config as RetryConfig;
                let retryCount = config.retryCount || 0;

                if (retryCount >= this.maxRetries) {
                    return Promise.reject(error);
                }

                retryCount++;
                const delay = this.initialDelay * Math.pow(2, retryCount - 1);

                await new Promise(resolve => setTimeout(resolve, delay));
                return this.connection({...config, retryCount} as RetryConfig);
            }
        );
    }

    async checkJikanApiStatus(): Promise<boolean> {
        try {
            const response = await this.connection.get("/anime", {
                params: {
                    limit: 1
                }
            });

            return response.status === 200;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}