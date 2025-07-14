import {URL_PARAMS} from "../url-params.ts";
import {OrderBy} from "../../types/order-by.ts";
import {isOrderByType} from "../../../features/order-by/model/is-order-by-type.ts";

export function parseOrderByFromUrlParams(urlParams: URLSearchParams): OrderBy | null {
    const orderByType = urlParams.get(URL_PARAMS.ORDER_BY)

    if (!orderByType) return null;

    if(!isOrderByType(orderByType)) return null;

    return orderByType as OrderBy;
}