import {injectable} from "inversify";
import {makeAutoObservable,} from "mobx";
import {STEPS} from "../lib/steps.ts";

@injectable()
class SignInFormStepsStore {

    constructor() {
        makeAutoObservable(this);
    }

    public step: STEPS = STEPS.EMAIL;
    public setStep = (step: STEPS) => this.step = step;

    public nextStep = () => this.step++;


    public resetSteps = () => {
        this.setStep(STEPS.EMAIL)
    }
}

export {SignInFormStepsStore}