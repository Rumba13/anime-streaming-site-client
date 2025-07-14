import {SortType} from "../../types/sortType.ts";
import {URL_PARAMS} from "../url-params.ts";
import {isSortType} from "../../../features/order-by/model/is-sort-type.ts";

export function parseSortTypeFromUrlParams(urlParams: URLSearchParams): SortType | null {
    const sortType = urlParams.get(URL_PARAMS.SORT_TYPE)

    if (!sortType) return null;

    if(!isSortType(sortType)) return null;

    return sortType as SortType;
}