import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {AnimeType} from "../../../shared/types";
import {URL_PARAMS} from "../../../shared/lib";
import {URLSearchParamsParser} from "../../../shared/lib";
import {FilterStoreI} from "../../../shared/types";

@injectable()
class AnimeTypeFilterStore implements FilterStoreI {
    @inject(URLSearchParamsParser) private urlSearchParamsParser!: URLSearchParamsParser

    constructor() {
        makeAutoObservable(this);
    }

    public selectedAnimeType: AnimeType | null = null;
    public setSelectedAnimeType = (animeType: AnimeType | null) => {
        this.selectedAnimeType = animeType;
    }

    public toggleSelectedAnimeType = (animeType: AnimeType) => {
        if (this.selectedAnimeType === animeType) {
            this.setSelectedAnimeType(null);
        } else {
            this.setSelectedAnimeType(animeType);
        }
    }

    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const animeType = this.urlSearchParamsParser.parseType(urlParams);
        if(!animeType) return;
        this.setSelectedAnimeType(animeType);
    }
    public stateToURLParams = () => {
        if (!this.selectedAnimeType) return new URLSearchParams({});

        return new URLSearchParams({[URL_PARAMS.ANIME_TYPE]: this.selectedAnimeType});
    }
    public resetFilter = () => {
        this.setSelectedAnimeType(null);
    }
}
export {AnimeTypeFilterStore}