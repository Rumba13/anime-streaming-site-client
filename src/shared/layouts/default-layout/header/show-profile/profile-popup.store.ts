import {injectable} from "inversify";
import {BasePopupStore} from "../../../../model";
import {makeObservable, override} from "mobx";

@injectable()
class ProfilePopupStore extends BasePopupStore {
    constructor() {
        super();
        makeObservable(this, {
            isOpened: override,
            open: override,
            close: override,
            dispose: override,
            setIsOpened: override,
            setPopupRef:override,
            wasOpened: override,
            setWasOpened: override,
        })
    }
}
export { ProfilePopupStore }