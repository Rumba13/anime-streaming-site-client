import {injectable} from "inversify";
import axios from "axios";

@injectable()
export class AnimeService {
    private readonly baseUrl: string = "https://api.jikan.moe/v4/";

    private connection = axios.create({
        baseURL: this.baseUrl
    });

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
