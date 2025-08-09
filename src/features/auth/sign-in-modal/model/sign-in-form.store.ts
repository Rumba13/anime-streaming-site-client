import {injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {SignInDto} from "../../../../shared/types/sign-in.dto.ts";

@injectable()
class SignInFormStore {
    constructor() {
        makeAutoObservable(this)
    }

    private readonly LAST_STEP = 2;

    public step: number = 1;
    public setStep = (step:number) => this.step = step;

    public signInDto: Partial<SignInDto> = {}
    public setSignInDto = (signInDto:Partial<SignInDto>) => {
        this.signInDto = {...this.signInDto, ...signInDto}
    };

    public sendForm = () => {
        console.log(JSON.stringify(this.signInDto))
    }
}

export {SignInFormStore}