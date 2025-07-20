import {inject, injectable} from "inversify";
import {FilterStoreI} from "../../../shared/types";
import {makeAutoObservable} from "mobx";
import {URL_PARAMS, URLSearchParamsParser} from "../../../shared/lib";

@injectable()
export class PageStore implements FilterStoreI {
    constructor(
        @inject(URLSearchParamsParser) private urlSearchParamsParser: URLSearchParamsParser
    ) {
        makeAutoObservable(this)
    }

    public page: number = 1;
    public setPage = (page: number) => this.page = page


    public resetFilter = () => {
        this.setPage(1);
    }
    public stateToURLParams = () => {
        const urlParams = new URLSearchParams();

        if (this.page !== 1) urlParams.set(URL_PARAMS.PAGE, String(this.page))

        return urlParams
    }
    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const page = this.urlSearchParamsParser.parsePage(urlParams)
        this.setPage(page)
    }
}