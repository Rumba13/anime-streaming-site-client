import {inject, injectable} from "inversify";
import {BaseModalStore} from "../../../../shared/model";
import {makeAutoObservable} from "mobx";

@injectable()
class SignUpModalStore {
    @inject(BaseModalStore) public readonly modalStore!:BaseModalStore;
    constructor() {
        makeAutoObservable(this)
    }
}

export {SignUpModalStore}