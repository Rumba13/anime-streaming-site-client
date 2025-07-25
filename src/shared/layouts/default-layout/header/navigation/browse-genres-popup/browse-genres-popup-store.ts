import { makeObservable,  override} from "mobx";
import {injectable} from "inversify";
import {BasePopupStore} from "../../../../../model";

@injectable()
class BrowseGenresPopupStore extends BasePopupStore {
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
export { BrowseGenresPopupStore }