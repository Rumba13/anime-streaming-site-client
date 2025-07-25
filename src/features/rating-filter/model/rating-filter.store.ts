import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {URL_PARAMS} from "../../../shared/lib";
import {URLSearchParamsParser} from "../../../shared/lib";
import {FilterStoreI} from "../../../shared/types";
import {MAX_RATING, MIN_RATING} from "../../../shared/lib";

@injectable()
class RatingFilterStore implements FilterStoreI {
    @inject(URLSearchParamsParser)
    private readonly urlSearchParamsParser!: URLSearchParamsParser;

    constructor() {
        makeAutoObservable(this);
    }


    public minimalRating: number | null = 0;
    public maximumRating: number | null = 10;

    public setRating = (minimalRating: number | null, maximumRating: number | null) => {
        this.minimalRating = minimalRating;
        this.maximumRating = maximumRating;
    }

    public stateToURLParams() {
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
export {RatingFilterStore}