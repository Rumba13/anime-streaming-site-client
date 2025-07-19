import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {Dayjs} from "dayjs";
import {FilterStoreI} from "../../../shared/types/filter-store.interface.ts";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {jikanDateFormat} from "../../../shared/lib/jikan-date-format.ts";
import {URLSearchParamsParser} from "../../../shared/lib/url-search-params-parser/url-search-params-parser.ts";

@injectable()
export class AnimeDateFilterStore implements FilterStoreI {
    constructor(
        @inject(URLSearchParamsParser) private urlSearchParamsParser: URLSearchParamsParser
    ) {
        makeAutoObservable(this)
    }

    public startDate: Dayjs | null = null;
    public endDate: Dayjs | null = null;

    public setDates = (startDate: Dayjs | null, endDate: Dayjs | null) => {
        this.startDate = startDate;
        this.endDate = endDate;
        this.setIsSyncedWithUrl(false);
    }

    public isSyncedWithUrl:boolean = false;
    public setIsSyncedWithUrl = (isSyncedWithUrl:boolean) => this.isSyncedWithUrl = isSyncedWithUrl;

    public resetFilter = () => {
        this.setDates(null, null);
    }
    public stateToURLParams = () => {
        const urlParams: Record<string, string> = {};

        if (this.startDate) {
            urlParams[URL_PARAMS.START_DATE] = this.startDate.format(jikanDateFormat);
        }

        if (this.endDate) {
            urlParams[URL_PARAMS.END_DATE] = this.endDate.format(jikanDateFormat);
        }

        return new URLSearchParams(urlParams);
    }
    public setStateFromURLParams = (urlParams: URLSearchParams) => {
        const [startDate, endDate] = this.urlSearchParamsParser.parseDates(urlParams);

        this.setDates(startDate, endDate);
    }
}