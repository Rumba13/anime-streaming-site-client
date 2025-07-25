import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {ID} from "../../../shared/types";
import {URL_PARAMS} from "../../../shared/lib";
import {URLSearchParamsParser} from "../../../shared/lib";
import {FilterStoreI} from "../../../shared/types";

@injectable()
class GenreFilterStore implements FilterStoreI {
    @inject(URLSearchParamsParser) private urlSearchParamsParser!: URLSearchParamsParser

    constructor() {
        makeAutoObservable(this)
    }

    public selectedGenres: ID[] = [];
    public setSelectedGenres = (genres: ID[]) => {
        this.selectedGenres = genres;
    }

    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const genres = this.urlSearchParamsParser.parseGenreIds(urlParams)
        if (!genres) {
            return
        }
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
export {GenreFilterStore}