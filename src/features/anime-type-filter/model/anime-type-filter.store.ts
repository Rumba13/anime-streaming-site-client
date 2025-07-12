import {injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {AnimeType} from "../../../shared/types/anime-type.ts";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {parseAnimeTypeFromUrl} from "../../../entities/anime-type";

@injectable()
export class AnimeTypeFilterStore {
    constructor() {
        makeAutoObservable(this);
    }

    public selectedAnimeType: AnimeType | null = null;
    public setSelectedAnimeType = (animeType: AnimeType | null) => this.selectedAnimeType = animeType;

    public toggleSelectedAnimeType = (animeType: AnimeType) => {
        if (this.selectedAnimeType === animeType) {
            this.setSelectedAnimeType(null);
        } else {
            this.setSelectedAnimeType(animeType);
        }
    }

    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const animeType = parseAnimeTypeFromUrl(urlParams);
        if(!animeType) return;
        this.setSelectedAnimeType(animeType);
    }
    public stateToURLParams = () => {
        if (!this.selectedAnimeType) return;

        return {[URL_PARAMS.ANIME_TYPE]: this.selectedAnimeType};
    }
}