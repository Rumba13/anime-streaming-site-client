import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {URLSearchParamsParser} from "../../../shared/lib/url-search-params-parser/url-search-params-parser.ts";
import {FilterStoreI} from "../../../shared/types/filter-store.interface.ts";

@injectable()
export class SearchQueryStore implements FilterStoreI {
    constructor(
        @inject(URLSearchParamsParser) private urlSearchParamsParser: URLSearchParamsParser,
    ) {
        makeAutoObservable(this);
    }

    public searchQuery: string = "";
    public setSearchQuery = (searchQuery: string) => this.searchQuery = searchQuery;

    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const searchQuery = this.urlSearchParamsParser.parseQuery(urlParams)

        if (!searchQuery) return;

        this.setSearchQuery(searchQuery);
    }

    public stateToURLParams = () => {
        const searchQuery = this.searchQuery

        if (searchQuery === "") {
            return new URLSearchParams({});
        } else {
            return new URLSearchParams({[URL_PARAMS.QUERY]: searchQuery})
        }
    }

    public resetFilter = () => {
        this.setSearchQuery("");
    }
}