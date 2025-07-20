import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {OrderBy} from "../../../shared/types/order-by.ts";
import {SortType} from "../../../shared/types/sortType.ts";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {URLSearchParamsParser} from "../../../shared/lib/url-search-params-parser/url-search-params-parser.ts";
import {FilterStoreI} from "../../../shared/types/filter-store.interface.ts";
import {DEFAULT_ORDER_BY} from "../../../shared/lib/default-order-by.ts";
import {DEFAULT_SORT_TYPE} from "../../../shared/lib/default-sort-type.ts";

@injectable()
export class OrderByStore implements FilterStoreI {
    constructor(
        @inject(URLSearchParamsParser) private urlSearchParamsParser: URLSearchParamsParser,
    ) {
        makeAutoObservable(this);
    }

    public orderBy: OrderBy = DEFAULT_ORDER_BY;
    public sortType: SortType = DEFAULT_SORT_TYPE;
    public setOrderBy = (orderBy: OrderBy) => {
        this.orderBy = orderBy;
    }

    public setSortType = (sortType: SortType) => {
        this.sortType = sortType;
    }

    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const orderBy = this.urlSearchParamsParser.parseOrderBy(urlParams)
        const sortType = this.urlSearchParamsParser.parseSortType(urlParams)

        if (orderBy) this.setOrderBy(orderBy);
        if (sortType) this.setSortType(sortType);
    }

    public stateToURLParams = () => {
        const urlParams = new URLSearchParams();

        if (this.orderBy !== DEFAULT_ORDER_BY) {
            urlParams.set(URL_PARAMS.ORDER_BY, this.orderBy);
        }
        if (this.sortType !== DEFAULT_SORT_TYPE) {
            urlParams.set(URL_PARAMS.SORT_TYPE, this.sortType);
        }
        return urlParams
    }
    public resetFilter = () => {
        this.setOrderBy(DEFAULT_ORDER_BY);
        this.setSortType(DEFAULT_SORT_TYPE);
    }
}