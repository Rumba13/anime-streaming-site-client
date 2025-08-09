import {injectable} from "inversify";
import {BaseModalStore} from "../../../../shared/model";
import {makeObservable, override} from "mobx";

@injectable()
class SignUpModalStore extends BaseModalStore {
    constructor() {
        super();
        makeObservable(this, {
            isOpened: override,
            wasOpened: override,
            setWasOpened: override,
            open: override,
            close: override,
            setIsOpened: override,
            dispose: override,
            setModalRef: override,
        })
    }
}

export {SignUpModalStore}