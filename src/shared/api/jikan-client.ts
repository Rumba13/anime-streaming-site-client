import axios from "axios";
import {injectable} from "inversify";
import rateLimit from "axios-rate-limit";

const SERVER_URL_DEV = "https://api.jikan.moe/v4/";

export const jikanClient = axios.create({
    baseURL: SERVER_URL_DEV,
});

@injectable()
export class JikanClient {
    private readonly baseUrl: string = "https://api.jikan.moe/v4/";

    public readonly connection = rateLimit(axios.create({baseURL: this.baseUrl}), {
        maxRPS: 3
    })

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