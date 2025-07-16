import {inject, injectable} from "inversify";
import {JikanPagination} from "../types/jikan-pagination.ts";
import {Anime} from "../types/anime.ts";
import {JikanClient} from "./jikan-client.ts";
import {ID} from "../types";
import {SearchAnimeRequest} from "../types/search-anime-request.ts";
import {AnimeType} from "../types/anime-type.ts";
import {BaseError} from "../model/base-error.ts";
import {OrderBy} from "../types/order-by.ts";
import {SearchDto} from "../types/search-dto.ts";

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

    async search({
                     excludedGenreIds,
                     genreIds,
                     sortType,
                     type,
                     orderBy,
                     page,
        query
                 }: SearchDto, signal?: AbortSignal): Promise<JikanPagination<Anime> | null> {
        try {
            const pagination: JikanPagination<Anime> = (await this.jikanClient.connection.get<JikanPagination<Anime>>("/anime", {
                params: {
                    order_by: orderBy || "popularity",
                    sort: sortType || "desc",
                    genres: genreIds.length > 0 ? genreIds.join(',') : undefined,
                    genres_exclude: excludedGenreIds.length > 0 ? excludedGenreIds.join(',') : undefined,
                    page,
                    type: type ? type : undefined,
                    q: query
                } as SearchAnimeRequest,
                signal
            })).data;

            return pagination
        } catch (error) {
            console.log(error);
            throw new BaseError("Search Error", "NetworkError");
        }
    }
}

