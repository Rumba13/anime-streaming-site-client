import {URL_PARAMS} from "../url-params.ts";

export function parsePageFromUrlParams(urlParams: URLSearchParams):number {
    const pageString = urlParams.get(URL_PARAMS.PAGE)
    if(!pageString) return 1;

    const page = Number(pageString);
    if(Number.isNaN(page) || !Number.isInteger(page) || page < 1) return 1;

    return page
}