import {injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {parseSearchQueryFromUrlParams} from "../lib/parse-search-query-from-url-params.ts";
import {URLSyncStore} from "../../../shared/lib/url-sync-store/url-sync-store-service.ts";

@injectable()
export class SearchQueryStore implements URLSyncStore {
    constructor() {
        makeAutoObservable(this);
    }

    public searchQuery:string = "";
    public setSearchQuery = (searchQuery:string) => this.searchQuery = searchQuery;

    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const searchQuery = parseSearchQueryFromUrlParams(urlParams)

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