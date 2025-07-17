import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {AnimeStatus} from "../../../shared/types/anime-status.ts";
import {URLSyncStore} from "../../../shared/lib/url-sync-store/url-sync-store-service.ts";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {URLSearchParamsParser} from "../../../shared/lib/url-search-params-parser/url-search-params-parser.ts";

@injectable()
export class AnimeStatusFilterStore implements URLSyncStore {
    constructor(
        @inject(URLSearchParamsParser) private urlSearchParamsParser: URLSearchParamsParser,
    ) {
        makeAutoObservable(this)
    }

    public animeStatus: AnimeStatus | null = null;
    public setAnimeStatus = (animeStatus: AnimeStatus | null) => this.animeStatus = animeStatus;

    public stateToURLParams() {
        if (!this.animeStatus) return new URLSearchParams({});

        return new URLSearchParams({
            [URL_PARAMS.ANIME_STATUS]: this.animeStatus
        })
    }

    public setStateFromURLParams(searchParams: URLSearchParams) {
        const animeStatus = this.urlSearchParamsParser.parseStatus(searchParams);
        if (!animeStatus) return;
        this.setAnimeStatus(animeStatus)
    }
}
