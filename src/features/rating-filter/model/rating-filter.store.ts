import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {URLSyncStore} from "../../../shared/lib/url-sync-store/url-sync-store-service.ts";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {URLSearchParamsParser} from "../../../shared/lib/url-search-params-parser/url-search-params-parser.ts";

@injectable()
export class RatingFilterStore implements URLSyncStore {
    constructor(
        @inject(URLSearchParamsParser) private readonly urlSearchParamsParser: URLSearchParamsParser,
    ) {
        makeAutoObservable(this)
    }

    public minimalRating: number | null = 0;
    public maximumRating: number | null = 10;

    public setRating = (minimalRating: number | null, maximumRating: number | null) => {
        console.log(minimalRating, maximumRating);
        this.minimalRating = minimalRating;
        this.maximumRating = maximumRating;
    }

    public stateToURLParams() {
        return new URLSearchParams({
            [URL_PARAMS.MINIMAL_RATING]: String(this.minimalRating),
            [URL_PARAMS.MAXIMUM_RATING]: String(this.maximumRating),
        })
    }

    public setStateFromURLParams(searchParams: URLSearchParams) {
        const minimalRating = this.urlSearchParamsParser.parseMinimalRating(searchParams);
        const maximalRating = this.urlSearchParamsParser.parseMaximumRating(searchParams);

        this.setRating(minimalRating, maximalRating);
    }
}