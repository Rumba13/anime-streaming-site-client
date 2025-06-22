import {injectable} from "inversify";
import {BasePopupStore} from "../../../../model/base-popup.store.ts";
import {makeObservable, override} from "mobx";

@injectable()
export class ProfilePopupStore extends BasePopupStore {
    constructor() {
        super();
        makeObservable(this, {
            isOpened: override,
            open: override,
            close: override,
            dispose: override,
            setIsOpened: override,
            setPopupRef:override
        })
    }
}