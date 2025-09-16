import {inject, injectable} from "inversify";
import {BasePopupStore} from "../../../../../model";
import {makeAutoObservable} from "mobx";

@injectable()
class ProfilePopupStore {
    @inject(BasePopupStore)
    public readonly popupStore!: BasePopupStore;

    constructor() {
        makeAutoObservable(this)
    }
}

export {ProfilePopupStore}