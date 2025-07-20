import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {AnimeType} from "../../../shared/types/anime-type.ts";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {URLSearchParamsParser} from "../../../shared/lib/url-search-params-parser/url-search-params-parser.ts";
import {FilterStoreI} from "../../../shared/types/filter-store.interface.ts";

@injectable()
export class AnimeTypeFilterStore implements FilterStoreI {
    constructor(
        @inject(URLSearchParamsParser) private urlSearchParamsParser: URLSearchParamsParser,
    ) {
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