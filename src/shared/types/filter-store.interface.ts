export interface FilterStoreI {
    stateToURLParams: () => URLSearchParams
    setStateFromURLParams: (urlParams: URLSearchParams) => void,
    resetFilter: () => void,
    isSyncedWithUrl: boolean,
    setIsSyncedWithUrl: (isSyncedWithUrl: boolean) => void,
}