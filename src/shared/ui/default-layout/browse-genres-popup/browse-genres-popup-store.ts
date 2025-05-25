import {makeAutoObservable} from "mobx";
import {injectable} from "inversify";

@injectable()
export class BrowseGenresPopupStore {
    constructor() {
        makeAutoObservable(this);
    }

     public isOpened: boolean = false;

    public setIsOpened = (isOpened: boolean) => {
        console.log(this.isOpened,isOpened)
        this.isOpened = isOpened;
    }
}