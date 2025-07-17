import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {OrderBy} from "../../../shared/types/order-by.ts";
import {SortType} from "../../../shared/types/sortType.ts";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {URLSearchParamsParser} from "../../../shared/lib/url-search-params-parser/url-search-params-parser.ts";
import {FilterStoreI} from "../../../shared/types/filter-store.interface.ts";

@injectable()
export class OrderByStore implements FilterStoreI {
    constructor(
        @inject(URLSearchParamsParser) private urlSearchParamsParser: URLSearchParamsParser,
    ) {
        makeAutoObservable(this);
    }

    private readonly DEFAULT_ORDER_BY: OrderBy = "popularity"
    private readonly DEFAULT_SORT_TYPE: SortType = "asc"

    public orderBy: OrderBy = this.DEFAULT_ORDER_BY;
    public setOrderBy = (orderBy: OrderBy) => this.orderBy = orderBy;

    public sortType: SortType = this.DEFAULT_SORT_TYPE;
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
    public resetFilter = () => {
        this.setOrderBy(this.DEFAULT_ORDER_BY);
        this.setSortType(this.DEFAULT_SORT_TYPE);
    }
}