import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {URL_PARAMS} from "../../../shared/lib";
import {URLSearchParamsParser} from "../../../shared/lib";
import {FilterStoreI} from "../../../shared/types";

@injectable()
class SearchQueryStore implements FilterStoreI {
    @inject(URLSearchParamsParser)
    private urlSearchParamsParser!: URLSearchParamsParser;

    constructor() {
        makeAutoObservable(this);
    }

    public searchQuery: string = "";
    public setSearchQuery = (searchQuery: string) => {
        this.searchQuery = searchQuery;
    }

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
export {SearchQueryStore}