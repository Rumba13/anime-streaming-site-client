import {injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {OrderBy} from "../../../shared/types/order-by.ts";
import {SortType} from "../../../shared/types/sortType.ts";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {
    parseOrderByFromUrlParams
} from "../../../shared/lib/parse-order-by-from-url-params/parse-order-by-from-url-params.ts";
import {
    parseSortTypeFromUrlParams
} from "../../../shared/lib/parse-sort-type-from-url-params/parse-sort-type-from-url-params.ts";

@injectable()
export class OrderByStore {
    constructor() {
        makeAutoObservable(this);
    }

    public orderBy: OrderBy = "popularity";
    public setOrderBy = (orderBy: OrderBy) => this.orderBy = orderBy;

    public sortType: SortType = "desc";
    public setSortType = (sortType: SortType) => this.sortType = sortType;

    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const orderBy = parseOrderByFromUrlParams(urlParams)
        const sortType = parseSortTypeFromUrlParams(urlParams)

        if (orderBy) this.setOrderBy(orderBy);
        if (sortType) this.setSortType(sortType);
    }

    public stateToURLParams = () => {
        return {
            [URL_PARAMS.ORDER_BY]: this.orderBy,
            [URL_PARAMS.SORT_TYPE]: this.sortType
        }
    }
}