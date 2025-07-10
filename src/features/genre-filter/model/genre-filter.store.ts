import {injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import { ID} from "../../../shared/types";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";

@injectable()
export class GenreFilterStore {

    constructor() {
        makeAutoObservable(this)
    }


    public selectedGenres: ID[] = [];
    public setSelectedGenres = (genres: ID[]) => this.selectedGenres = genres;

    public setStateFromURLParams = (urlParams:URLSearchParams) => {
        const genres = urlParams.get(URL_PARAMS.GENRES)
        if(genres) this.setSelectedGenres(genres.split(",").map(Number));
    }

    public getStateToURLParams = () => {
        const genres = this.selectedGenres.join(",")

        if (genres === "") {
            return {};
        } else {
            return {[URL_PARAMS.GENRES]: genres}
        }
    }
}