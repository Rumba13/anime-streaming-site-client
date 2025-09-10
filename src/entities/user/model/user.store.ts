import {injectable} from "inversify";
import {User} from "@firebase/auth";
import {makeAutoObservable} from "mobx";

@injectable()
class UserStore {
    constructor() {
        makeAutoObservable(this)
    }

    public user: User | null = null;
    public setUser = (user: User | null) => this.user = user;

    public get isSignedIn() {
        return !!this.user;
    }
}

export {UserStore}