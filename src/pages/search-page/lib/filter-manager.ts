import {FilterStoreI} from "../../../shared/types";
import {UrlSyncStoreService} from "../../../shared/lib";
import {SetURLSearchParams} from "react-router-dom";
import {inject, injectable} from "inversify";

@injectable()
export class FilterManager {
    private filterStores: FilterStoreI[] = [];

    constructor(
        @inject(UrlSyncStoreService)
        private readonly urlSyncStoreService: UrlSyncStoreService
    ) {
    }

    public syncStoresFromURLParams = (urlSearchParams: URLSearchParams) => {
        this.urlSyncStoreService.syncStoresFromURLParams(urlSearchParams)
    }

    public syncStoresToURLParams = (setURLSearchParams: SetURLSearchParams) => {
        this.urlSyncStoreService.syncStoresToURLParams(setURLSearchParams)
    }
    public setFilters = (filterStores: FilterStoreI[]) => {
        this.filterStores = filterStores
        this.urlSyncStoreService.setStores(filterStores);
    };
    public resetFilters = () => {
        this.filterStores.forEach(store => store.resetFilter());
    }
}