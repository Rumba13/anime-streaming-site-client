import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {URLSearchParamsParser} from "../../../shared/lib/url-search-params-parser/url-search-params-parser.ts";
import {FilterStoreI} from "../../../shared/types/filter-store.interface.ts";
import {MAX_RATING, MIN_RATING} from "../../../shared/lib/rating-constants.ts";

@injectable()
export class RatingFilterStore implements FilterStoreI {
    constructor(
        @inject(URLSearchParamsParser) private readonly urlSearchParamsParser: URLSearchParamsParser,
    ) {
        makeAutoObservable(this)
    }

    public isSyncedWithUrl: boolean = false;
    public setIsSyncedWithUrl = (isSyncedWithUrl: boolean) => this.isSyncedWithUrl = isSyncedWithUrl;

    public minimalRating: number | null = 0;
    public maximumRating: number | null = 10;

    public setRating = (minimalRating: number | null, maximumRating: number | null) => {
        this.minimalRating = minimalRating;
        this.maximumRating = maximumRating;
        this.setIsSyncedWithUrl(false);
    }

    public stateToURLParams() {
        this.setIsSyncedWithUrl(true)

        const urlParams = new URLSearchParams();

        if (this.minimalRating && this.minimalRating !== MIN_RATING) {
            urlParams.set(URL_PARAMS.MINIMAL_RATING, String(this.minimalRating))
        }
        if (this.maximumRating && this.maximumRating !== MAX_RATING) {
            urlParams.set(URL_PARAMS.MAXIMUM_RATING, String(this.maximumRating))
        }

        return urlParams;
    }

    public setStateFromURLParams(searchParams: URLSearchParams) {
        const minimalRating = this.urlSearchParamsParser.parseMinimalRating(searchParams);
        const maximalRating = this.urlSearchParamsParser.parseMaximumRating(searchParams);

        this.setRating(minimalRating, maximalRating);
    }

    public resetFilter = () => {
        this.setRating(0, 10);
    }
}