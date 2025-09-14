import {injectable} from "inversify";
import {BaseModalStore} from "../../../../shared/model";
import {makeAutoObservable } from "mobx";
import {inject} from "inversify";

@injectable()
class SignInModalStore  {
    @inject(BaseModalStore) public readonly modalStore!:BaseModalStore;
    constructor() {
        makeAutoObservable(this)
    }
}

export {SignInModalStore}