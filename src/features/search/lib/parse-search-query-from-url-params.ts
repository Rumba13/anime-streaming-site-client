import {URL_PARAMS} from "../../../shared/lib/url-params.ts";

export function parseSearchQueryFromUrlParams(urlParams: URLSearchParams) {
    const searchQuery = urlParams.get(URL_PARAMS.QUERY);
    if (!searchQuery) return null;

    return searchQuery;
}