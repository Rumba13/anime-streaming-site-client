import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {URLSyncStore} from "../../../shared/lib/url-sync-store/url-sync-store-service.ts";
import {URLSearchParamsParser} from "../../../shared/lib/url-search-params-parser/url-search-params-parser.ts";

@injectable()
export class SearchQueryStore implements URLSyncStore {
    constructor(
        @inject(URLSearchParamsParser) private urlSearchParamsParser: URLSearchParamsParser,
    ) {
        makeAutoObservable(this);
    }

    public searchQuery:string = "";
    public setSearchQuery = (searchQuery:string) => this.searchQuery = searchQuery;

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
}