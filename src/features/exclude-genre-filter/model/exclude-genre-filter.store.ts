import { injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {ID} from "../../../shared/types";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {parseExcludeGenresFromUrl} from "../lib/parse-exclude-genres-from-url.ts";
import {URLSyncStore} from "../../../shared/lib/url-sync-store/url-sync-store-service.ts";

@injectable()
export class ExcludeGenreFilterStore implements URLSyncStore {

    constructor(
    ) {
        makeAutoObservable(this)
    }

    public selectedGenres: ID[] = [];
    public setSelectedGenres = (genres: ID[]) => this.selectedGenres = genres;

    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const genres = parseExcludeGenresFromUrl(urlParams)
        if (!genres) return;
        this.setSelectedGenres(genres);
    }

    public stateToURLParams = () => {
        const genres = this.selectedGenres.join(",")

        if (genres === "") {
            return new URLSearchParams({});
        } else {
            return new URLSearchParams({[URL_PARAMS.EXCLUDE_GENRES]: genres})
        }
    }
}