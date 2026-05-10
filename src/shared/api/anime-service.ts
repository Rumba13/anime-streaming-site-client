import {inject, injectable} from "inversify";
import {ID, JikanPagination} from "../types";
import {Anime} from "../types";
import {JikanClient} from "./jikan-client";
import {BaseError} from "../model";
import {SearchDto} from "../types";
import {jikanDateFormat} from "../lib";
import {DEFAULT_SORT_TYPE} from "../lib";
import {DEFAULT_ORDER_BY} from "../lib";
import {MAX_RATING, MIN_RATING} from "../lib";
import {Dayjs} from "dayjs";
import {GetAnimeByIdDto} from "../types/get-anime-by-id.dto.ts";
import {GetAnimeByIdResponse} from "../types/get-anime-by-id-response.ts";

@injectable()
class AnimeService {

    @inject(JikanClient)
    private readonly jikanClient!: JikanClient;

    constructor() {}

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

    async getAnimeById(getAnimeByIdDto:GetAnimeByIdDto): Promise<GetAnimeByIdResponse> {
        const {id} = getAnimeByIdDto

        try {
            const response = await this.jikanClient.connection.get<GetAnimeByIdResponse>(
                `/anime/${id}`
            );

            console.log("response", response.data)
            return response.data;
        } catch (error) {
            console.error("[Anime Service] getAnimeById Error:", error);
            throw new BaseError("GetAnimeById Error", "NetworkError");
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

            console.log("response", response.data)

            return response.data;
        } catch (error) {

            if(error instanceof Error)
            {
                if(error.name === "CanceledError")
                {
                    console.log("Request cancelled");
                    return null;
                }
            }

            console.error("[Anime Service] Search Error:", error);
            throw new BaseError("Search Error", "NetworkError");
        }
    }
}
export { AnimeService }

