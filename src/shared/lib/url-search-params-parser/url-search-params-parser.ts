import {injectable} from "inversify";
import {SearchDto} from "../../types/search-dto.ts";
import {isAnimeType} from "../../../entities/anime-type";
import {isOrderByType} from "../../../features/order-by/model/is-order-by-type.ts";
import {isSortType} from "../../../features/order-by/model/is-sort-type.ts";
import {URL_PARAMS} from "../url-params.ts";
import {SortType} from "../../types/sortType.ts";
import {OrderBy} from "../../types/order-by.ts";
import {MAX_RATING, MIN_RATING} from "../rating-constants.ts";
import {AnimeStatus} from "../../types/anime-status.ts";
import {isAnimeStatus} from "../is-anime-status.ts";

@injectable()
export class URLSearchParamsParser {
    public parsePage = (searchParams: URLSearchParams): number => {
        const pageString = searchParams.get(URL_PARAMS.PAGE)
        if (!pageString) return 1;

        const page = Number(pageString);
        if (Number.isNaN(page) || !Number.isInteger(page) || page < 1) return 1;

        return page
    }

    public parseType = (searchParams: URLSearchParams) => {
        const animeTypeString = searchParams.get(URL_PARAMS.ANIME_TYPE)

        if (!animeTypeString) return null;
        if (!isAnimeType(animeTypeString)) return null;

        return animeTypeString;
    }

    public parseGenreIds = (searchParams: URLSearchParams): number[] => {
        const genresString = searchParams.get(URL_PARAMS.GENRES)
        if (!genresString) return [];
        let genreIds = genresString.split(",").map(Number);
        genreIds = genreIds
            .filter(genreId => !Number.isNaN(genreId))
            .filter((value, index, self) => self.indexOf(value) === index)
        return genreIds
    }

    public parseExcludedGenreIds = (searchParams: URLSearchParams): number[] => {
        const excludeGenresString = searchParams.get(URL_PARAMS.EXCLUDE_GENRES)
        if (!excludeGenresString) return [];
        let excludeGenreIds = excludeGenresString.split(",").map(Number);
        excludeGenreIds = excludeGenreIds
            .filter(genreId => !Number.isNaN(genreId))
            .filter((value, index, self) => self.indexOf(value) === index)
        return excludeGenreIds
    }

    public parseOrderBy = (searchParams: URLSearchParams) => {
        const orderByType = searchParams.get(URL_PARAMS.ORDER_BY)
        if (!orderByType) return null;
        if (!isOrderByType(orderByType)) return null;
        return orderByType as OrderBy;
    }

    public parseSortType = (searchParams: URLSearchParams) => {
        const sortType = searchParams.get(URL_PARAMS.SORT_TYPE)
        if (!sortType) return null;
        if (!isSortType(sortType)) return null;
        return sortType as SortType;
    }

    public parseQuery = (searchParams: URLSearchParams): string | null => {
        const searchQuery = searchParams.get(URL_PARAMS.QUERY);
        if (!searchQuery) return null;
        return searchQuery;
    }
    public parseMinimalRating = (searchParams: URLSearchParams): number | null => {
        const minimalRatingString = searchParams.get(URL_PARAMS.MINIMAL_RATING);

        if (!minimalRatingString) return null;
        const minimalRating = +minimalRatingString;

        if (Number.isNaN(minimalRating) || !Number.isInteger(minimalRating) || minimalRating > MAX_RATING || minimalRating < MIN_RATING) return null;


        return minimalRating;
    }
    public parseMaximumRating = (searchParams: URLSearchParams): number | null => {
        const maximumRatingString = searchParams.get(URL_PARAMS.MAXIMUM_RATING);

        if (!maximumRatingString) return null;
        const maximumRating = +maximumRatingString;

        if (Number.isNaN(maximumRating) || !Number.isInteger(maximumRating) || maximumRating > MAX_RATING || maximumRating < MIN_RATING) return null;

        return maximumRating;
    }
    public parseStatus = (searchParams: URLSearchParams): AnimeStatus | null => {
        const animeStatus = searchParams.get(URL_PARAMS.ANIME_STATUS);

        if (!animeStatus) return null;

        if (!isAnimeStatus(animeStatus)) return null;

        return animeStatus as AnimeStatus
    }

    public parseSearchDto = (searchParams: URLSearchParams): SearchDto => {
        return {
            page: this.parsePage(searchParams),
            type: this.parseType(searchParams),
            genreIds: this.parseGenreIds(searchParams),
            excludedGenreIds: this.parseExcludedGenreIds(searchParams),
            orderBy: this.parseOrderBy(searchParams),
            sortType: this.parseSortType(searchParams),
            query: this.parseQuery(searchParams),
            minRating: this.parseMinimalRating(searchParams),
            maxRating: this.parseMaximumRating(searchParams),
            animeStatus: this.parseStatus(searchParams)
        }
    }
}