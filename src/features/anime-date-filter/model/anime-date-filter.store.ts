import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {Dayjs} from "dayjs";
import {FilterStoreI} from "../../../shared/types";
import {URL_PARAMS} from "../../../shared/lib";
import {jikanDateFormat} from "../../../shared/lib";
import {URLSearchParamsParser} from "../../../shared/lib";

@injectable()
class AnimeDateFilterStore implements FilterStoreI {
    @inject(URLSearchParamsParser) private urlSearchParamsParser!: URLSearchParamsParser

    constructor() {
        makeAutoObservable(this)
    }

    public startDate: Dayjs | null = null;
    public endDate: Dayjs | null = null;

    public setDates = (startDate: Dayjs | null, endDate: Dayjs | null) => {
        this.startDate = startDate;
        this.endDate = endDate;
    }

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
export {AnimeDateFilterStore}