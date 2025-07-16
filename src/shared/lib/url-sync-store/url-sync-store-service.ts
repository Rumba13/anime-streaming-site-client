import {injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {SetURLSearchParams} from "react-router-dom";

export interface URLSyncStore {
    stateToURLParams: () => URLSearchParams
    setStateFromURLParams: (urlParams: URLSearchParams) => void
}

@injectable()
export class UrlSyncStoreService {
    private stores: URLSyncStore[] = [];
    public setStores = (stores: URLSyncStore[]) => this.stores = stores;

    constructor() {
        makeAutoObservable(this)
    }

    public syncStoresToURLParams(setSearchParams: SetURLSearchParams) {
        const urlParams = new URLSearchParams();

        this.stores.forEach(store => {
            const storeParams = store.stateToURLParams();

            storeParams.forEach((value, key) => {
                urlParams.set(key, value);
            });
        });

        setSearchParams(urlParams);
    }
    public syncStoresFromURLParams(params: URLSearchParams) {
        this.stores.forEach(store => store.setStateFromURLParams(params));
    }
}