import {injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {makePersistable} from "mobx-persist-store";

@injectable()
class AnimationsSwitchStore {
    constructor() {
        makeAutoObservable(this);

        void makePersistable(this, {
            name: "AnimationsSwitchStore",
            properties: ["isAnimationsEnabled"],
            storage: window.localStorage
        })
    }

    public isAnimationsEnabled: boolean = true;
    public setIsAnimationsEnabled = (isEnabled: boolean) => this.isAnimationsEnabled = isEnabled;
}
export { AnimationsSwitchStore }