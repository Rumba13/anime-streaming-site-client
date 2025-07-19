import {injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {SetURLSearchParams} from "react-router-dom";
import {FilterStoreI} from "../../types/filter-store.interface.ts";

@injectable()
export class UrlSyncStoreService {
    private stores: FilterStoreI[] = [];
    public setStores = (stores: FilterStoreI[]) => this.stores = stores;

    constructor() {
        makeAutoObservable(this)
    }

    public syncStoresToURLParams(setSearchParams: SetURLSearchParams) {
        const urlParams = new URLSearchParams();

        for (const store of this.stores) {

            const storeParams = store.stateToURLParams();

            storeParams.forEach((value, key) => {
                urlParams.set(key, value);
            });

        }

        setSearchParams(urlParams);
    }

    public syncStoresFromURLParams(params: URLSearchParams) {
        this.stores.forEach(store => store.setStateFromURLParams(params));
    }
}