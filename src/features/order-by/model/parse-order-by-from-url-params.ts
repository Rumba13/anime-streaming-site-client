import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {OrderBy} from "../../../shared/types/order-by.ts";
import {isOrderByType} from "./is-order-by-type.ts";

export function parseOrderByFromUrlParams(urlParams: URLSearchParams): OrderBy | null {
    const orderByType = urlParams.get(URL_PARAMS.ORDER_BY)


    if (!orderByType) return null;

    console.log(orderByType)
    if(!isOrderByType(orderByType)) return null;

    return orderByType as OrderBy;
}