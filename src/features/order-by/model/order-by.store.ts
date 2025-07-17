import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {OrderBy} from "../../../shared/types/order-by.ts";
import {SortType} from "../../../shared/types/sortType.ts";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {URLSyncStore} from "../../../shared/lib/url-sync-store/url-sync-store-service.ts";
import {URLSearchParamsParser} from "../../../shared/lib/url-search-params-parser/url-search-params-parser.ts";

@injectable()
export class OrderByStore implements URLSyncStore{
    constructor(
        @inject(URLSearchParamsParser) private urlSearchParamsParser: URLSearchParamsParser,
    ) {
        makeAutoObservable(this);
    }

    public orderBy: OrderBy = "popularity";
    public setOrderBy = (orderBy: OrderBy) => this.orderBy = orderBy;

    public sortType: SortType = "asc";
    public setSortType = (sortType: SortType) => this.sortType = sortType;

    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const orderBy = this.urlSearchParamsParser.parseOrderBy(urlParams)
        const sortType = this.urlSearchParamsParser.parseSortType(urlParams)
        if (orderBy) this.setOrderBy(orderBy);
        if (sortType) this.setSortType(sortType);
    }

    public stateToURLParams = () => {
        return new URLSearchParams({
            [URL_PARAMS.ORDER_BY]: this.orderBy,
            [URL_PARAMS.SORT_TYPE]: this.sortType
        })
    }
}