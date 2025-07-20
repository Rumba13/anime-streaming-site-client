import {inject, injectable} from "inversify";
import {JikanPagination} from "../types/jikan-pagination.ts";
import {Anime} from "../types/anime.ts";
import {JikanClient} from "./jikan-client.ts";
import {SearchAnimeRequest} from "../types/search-anime-request.ts";
import {BaseError} from "../model/base-error.ts";
import {SearchDto} from "../types/search-dto.ts";
import {jikanDateFormat} from "../lib/jikan-date-format.ts";
import {DEFAULT_SORT_TYPE} from "../lib/default-sort-type.ts";
import {DEFAULT_ORDER_BY} from "../lib/default-order-by.ts";
import {MAX_RATING, MIN_RATING} from "../lib/rating-constants.ts";
import {Dayjs} from "dayjs";

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

    async search(searchDto: SearchDto, signal?: AbortSignal): Promise<JikanPagination<Anime> | null> {
        const {
            excludedGenreIds,
            genreIds,
            sortType,
            type: animeType,
            orderBy,
            page,
            query,
            maxRating,
            minRating,
            animeStatus,
            animePgRating,
            startDate,
            endDate
        } = searchDto;

        const buildParam = <T>(value: T, defaultValue?: T): T | undefined =>
            value === null || value === defaultValue ? undefined : value;

        const buildParamWithNoUndefined = <T>(value: T, defaultValue?: T): T | undefined =>
            value || defaultValue;

        const buildDateParam = (date?: Dayjs | null): string | undefined =>
            date ? date.format(jikanDateFormat) : undefined;

        const buildGenreParam = (genres: number[]): string | undefined =>
            genres.length > 0 ? genres.join(',') : undefined;

        const params = {
            order_by: buildParamWithNoUndefined(orderBy, DEFAULT_ORDER_BY),
            sort: buildParamWithNoUndefined(sortType, DEFAULT_SORT_TYPE),
            genres: buildGenreParam(genreIds),
            genres_exclude: buildGenreParam(excludedGenreIds),
            page,
            type: buildParam(animeType),
            q: query,
            sfw: true,
            max_score: buildParam(maxRating, MAX_RATING),
            min_score: buildParam(minRating, MIN_RATING),
            status: buildParam(animeStatus),
            rating: buildParam(animePgRating),
            start_date: buildDateParam(startDate),
            end_date: buildDateParam(endDate),
        };

        try {
            const response = await this.jikanClient.connection.get<JikanPagination<Anime>>(
                "/anime",
                { params, signal }
            );
            return response.data;
        } catch (error) {
            console.error("Search Error:", error);
            throw new BaseError("Search Error", "NetworkError");
        }
    }
}

