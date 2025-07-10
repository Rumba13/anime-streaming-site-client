import {injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {ID} from "../../../shared/types";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";

@injectable()
export class ExcludeGenreFilterStore {

    constructor() {
        makeAutoObservable(this)
    }

    public selectedGenres: ID[] = [];
    public setSelectedGenres = (genres: ID[]) => this.selectedGenres = genres;

    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const genres = urlParams.get(URL_PARAMS.EXCLUDE_GENRES)
        if (genres) this.setSelectedGenres(genres.split(",").map(Number));
    }

    public stateToURLParams = () => {
        const genres = this.selectedGenres.join(",")

        if (genres === "") {
            return {};
        } else {
            return {[URL_PARAMS.EXCLUDE_GENRES]: genres}
        }
    }
}