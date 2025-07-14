import {injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {OrderBy} from "../../../shared/types/order-by.ts";
import {SortType} from "../../../shared/types/sortType.ts";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {parseOrderByFromUrlParams} from "./parse-order-by-from-url-params.ts";

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

        if (!orderBy) return;

        this.setOrderBy(orderBy);
    }

    public stateToURLParams = () => {
        return {[URL_PARAMS.ORDER_BY]: this.orderBy}
    }
}