import {inject, injectable} from "inversify";
import {JikanPagination} from "../types/jikan-pagination.ts";
import {Anime} from "../types/anime.ts";
import {JikanClient} from "./jikan-client.ts";
import {ID} from "../types";
import {SearchAnimeRequest} from "../types/search-anime-request.ts";
import {AnimeType} from "../types/anime-type.ts";
import {BaseError} from "../model/base-error.ts";
import {OrderBy} from "../types/order-by.ts";

@injectable()
export class AnimeService {

    constructor(
        @inject(JikanClient)
        private readonly jikanClient: JikanClient
    ) {

    }

    async loadBanners(): Promise<string[] | undefined> {
        try {
            const pagination: JikanPagination<Anime> = (await this.jikanClient.connection.get<JikanPagination<Anime>>("/anime", {
                params: {
                    order_by: "popularity",
                    sort: "asc",
                    limit: "12",
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

    async search(genres: ID[], page: number, genresToExclude: ID[], type: AnimeType | null, orderBy: OrderBy | null): Promise<JikanPagination<Anime> | null> {
        try {
            const pagination: JikanPagination<Anime> = (await this.jikanClient.connection.get<JikanPagination<Anime>>("/anime", {
                params: {
                    order_by: orderBy || "popularity",
                    sort: "asc",
                    genres: genres.length > 0 ? genres.join(',') : undefined,
                    genres_exclude: genresToExclude.length > 0 ? genresToExclude.join(',') : undefined,
                    page,
                    type: type ? type : undefined
                } as SearchAnimeRequest
            })).data;

            return pagination
        } catch (error) {
            console.log(error);
            throw new BaseError("Search Error", "NetworkError");
        }
    }
}

