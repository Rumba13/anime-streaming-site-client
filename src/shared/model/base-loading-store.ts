import {action, makeObservable, observable} from "mobx";
import {BaseError} from "./base-error";

export class BaseLoadingStore {
    constructor() {
        makeObservable(this, {
            error: observable,
            isError: observable,
            isLoaded: observable,
            isLoading: observable,
            setError: action,
            setIsLoaded: action,
            setIsLoading: action,
            setIsError: action,
        })
    }

    public isLoading: boolean = false;
    public setIsLoading = (isLoading: boolean) => this.isLoading = isLoading;

    public isLoaded: boolean = true;
    public setIsLoaded = (isLoaded: boolean) => this.isLoaded = isLoaded;

    public isError: boolean = false;
    public setIsError = (isError: boolean) => this.isError = isError;

    public error: BaseError | null = null;
    public setError = (error: BaseError | null) => this.error = error;
}