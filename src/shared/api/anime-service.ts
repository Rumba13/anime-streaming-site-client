import {injectable} from "inversify";
import axios from "axios";
import {JikanPagination} from "../types/jikan-pagination.ts";
import {Anime} from "../types/anime.ts";

@injectable()
export class AnimeService {
    private readonly baseUrl: string = "https://api.jikan.moe/v4/";

    private connection = axios.create({
        baseURL: this.baseUrl
    });

    async checkJikanApiStatus(): Promise<boolean> {
        try {
            const response = await this.connection.get("/anime", { //rewrite with status
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


    async loadBanners(): Promise<string[] | undefined> {
        try {
            const pagination: JikanPagination<Anime> = (await this.connection.get<JikanPagination<Anime>>("/anime", {
                params: {
                    order_by: "popularity",
                    sort: "asc",
                    limit: "12",
                    // q: "one"
                }
            })).data;

            const images: string[] = []

            for (const anime of pagination.data) {
                images.push(anime.images.webp.large_image_url);
            }

            return images
        } catch (error) {
            console.log(error);
        }
    }
}

