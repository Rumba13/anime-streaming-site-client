import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {ID} from "../../../shared/types";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {URLSearchParamsParser} from "../../../shared/lib/url-search-params-parser/url-search-params-parser.ts";
import {FilterStoreI} from "../../../shared/types/filter-store.interface.ts";

@injectable()
export class GenreFilterStore implements FilterStoreI {
    constructor(
        @inject(URLSearchParamsParser) private urlSearchParamsParser: URLSearchParamsParser,
    ) {
        makeAutoObservable(this)
    }

    public selectedGenres: ID[] = [];
    public isSyncedWithUrl: boolean = false;
    public setIsSyncedWithUrl = (isSyncedWithUrl: boolean) => this.isSyncedWithUrl = isSyncedWithUrl;
    public setSelectedGenres = (genres: ID[]) => {
        this.selectedGenres = genres;
        this.setIsSyncedWithUrl(false);
    }

    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const genres = this.urlSearchParamsParser.parseGenreIds(urlParams)
        if (!genres) return;
        this.setSelectedGenres(genres);
    }

    public stateToURLParams = () => {
        const genres = this.selectedGenres.join(",")
        if (genres === "") {
            return new URLSearchParams({});
        } else {
            return new URLSearchParams({[URL_PARAMS.GENRES]: genres})
        }
    }
    public resetFilter = () => {
        this.setSelectedGenres([]);
    }
}