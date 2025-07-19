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
import {jikanDateFormat} from "../lib/jikan-date-format.ts";

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
                     query,
                     maxRating,
                     minRating,
                     animeStatus,
                     animePgRating,
                     startDate,
                     endDate
                 }: SearchDto, signal?: AbortSignal): Promise<JikanPagination<Anime> | null> {

        const min_score = (minRating === 0 || minRating === null) ? undefined : minRating;
        const max_score = (maxRating === 10 || maxRating === null) ? undefined : maxRating;
        const status = animeStatus ? animeStatus : undefined;
        const rating = animePgRating ? animePgRating : undefined;
        const start_date = startDate ? startDate.format(jikanDateFormat) : undefined;
        const end_date = endDate ? endDate.format(jikanDateFormat) : undefined;

        try {
            const pagination: JikanPagination<Anime> = (await this.jikanClient.connection.get<JikanPagination<Anime>>("/anime", {
                params: {
                    order_by: orderBy || "popularity",
                    sort: sortType || "desc",
                    genres: genreIds.length > 0 ? genreIds.join(',') : undefined,
                    genres_exclude: excludedGenreIds.length > 0 ? excludedGenreIds.join(',') : undefined,
                    page,
                    type: type ? type : undefined,
                    q: query,
                    sfw: true,
                    max_score,
                    min_score,
                    status,
                    rating,
                    start_date,
                    end_date,
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

