import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {ID} from "../../../shared/types";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {parseGenreIdsFromUrl} from "../../../entities/genre";

@injectable()
export class GenreFilterStore {

    constructor() {
        makeAutoObservable(this)
    }

    public selectedGenres: ID[] = [];
    public setSelectedGenres = (genres: ID[]) => this.selectedGenres = genres;

    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const genres = parseGenreIdsFromUrl(urlParams)

        if (!genres) return;

        this.setSelectedGenres(genres);
    }

    public stateToURLParams = () => {
        const genres = this.selectedGenres.join(",")

        if (genres === "") {
            return {};
        } else {
            return {[URL_PARAMS.GENRES]: genres}
        }
    }
}