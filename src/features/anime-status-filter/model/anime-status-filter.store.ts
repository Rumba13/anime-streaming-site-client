import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {AnimeStatus} from "../../../shared/types";
import {URL_PARAMS} from "../../../shared/lib";
import {URLSearchParamsParser} from "../../../shared/lib";
import {isAnimeStatus} from "../../../shared/lib";
import {FilterStoreI} from "../../../shared/types";

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
