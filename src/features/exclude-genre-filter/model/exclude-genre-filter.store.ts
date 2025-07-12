import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {ID} from "../../../shared/types";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {parseExcludeGenresFromUrl} from "../lib/parse-exclude-genres-from-url.ts";
import {GenresStore} from "../../../entities/genre";

@injectable()
export class ExcludeGenreFilterStore {

    constructor(
        @inject(GenresStore) private genresStore: GenresStore,
    ) {
        makeAutoObservable(this)
    }

    public selectedGenres: ID[] = [];
    public setSelectedGenres = (genres: ID[]) => this.selectedGenres = genres;

    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const genres = parseExcludeGenresFromUrl(urlParams, this.genresStore)
        if (!genres) return;
        this.setSelectedGenres(genres);
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