import {injectable} from "inversify";
import {makeAutoObservable} from "mobx";

@injectable()
export class AnimationsSwitchStore {
    constructor() {
        makeAutoObservable(this);
    }

    public isAnimationsEnabled: boolean = true;
    public setIsAnimationsEnabled = (isEnabled: boolean) => this.isAnimationsEnabled = isEnabled;
}