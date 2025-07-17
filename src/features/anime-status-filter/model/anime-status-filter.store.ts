import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {AnimeStatus} from "../../../shared/types/anime-status.ts";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {URLSearchParamsParser} from "../../../shared/lib/url-search-params-parser/url-search-params-parser.ts";
import {isAnimeStatus} from "../../../shared/lib/is-anime-status.ts";
import {FilterStoreI} from "../../../shared/types/filter-store.interface.ts";

@injectable()
export class AnimeStatusFilterStore implements FilterStoreI {
    constructor(
        @inject(URLSearchParamsParser) private urlSearchParamsParser: URLSearchParamsParser,
    ) {
        makeAutoObservable(this)
    }

    public animeStatus: AnimeStatus | null = null;
    public setAnimeStatus = (animeStatus: AnimeStatus | null) => {
        this.animeStatus = animeStatus
        console.log(animeStatus)
    };

    public stateToURLParams() {
        if (!this.animeStatus) return new URLSearchParams({});

        return new URLSearchParams({
            [URL_PARAMS.ANIME_STATUS]: this.animeStatus
        })
    }

    public setStateFromURLParams(searchParams: URLSearchParams) {
        const animeStatus = this.urlSearchParamsParser.parseStatus(searchParams);
        if (!animeStatus || !isAnimeStatus(animeStatus)) return;
        this.setAnimeStatus(animeStatus)
    }

    public toggleSelectedAnimeStatus = (animeType: AnimeStatus) => {
        if (this.animeStatus === animeType) {
            this.setAnimeStatus(null);
        } else {
            this.setAnimeStatus(animeType);
        }
    }

    public resetFilter = () => {
        this.setAnimeStatus(null);
    }
}
