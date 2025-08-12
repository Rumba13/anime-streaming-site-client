import {injectable} from "inversify";
import {action, flow, makeObservable, observable, override} from "mobx";
import {SignInDto} from "../../../../shared/types/sign-in.dto.ts";
import {BaseLoadingStore} from "../../../../shared/model";
import {UserCredential} from "@firebase/auth";
import {auth} from "../../../../shared/api/firebase.ts";
import {isFirebaseError} from "../../../../shared/lib/is-firebase-error.ts";
import {InvalidEmailOrPasswordError, UnknownError} from "../../../../shared/model/errors.ts";
import {inject} from "inversify";
import {UserStore} from "../../../../entities/user";
import {signInWithEmailAndPassword} from "firebase/auth";

@injectable()
class SignInFormStore extends BaseLoadingStore {
    @inject(UserStore) private readonly userStore!: UserStore;

    constructor() {
        super()
        makeObservable(this, {
            error: override,
            isError: override,
            isLoaded: override,
            setError: override,
            setIsLoaded: override,
            setIsLoading: override,
            isLoading: override,
            setIsError: override,
            step: observable,
            setStep: action,
            signInDto: observable,
            setSignInDto: action,
            signIn: flow
        });
    }

    public step: number = 1;
    public setStep = (step: number) => this.step = step;

    public signInDto: Partial<SignInDto> = {}
    public setSignInDto = (signInDto: Partial<SignInDto>) => {
        this.signInDto = {...this.signInDto, ...signInDto}
    };

    public* signIn(onSuccess?: () => void) {

        if (!this.signInDto.email || !this.signInDto.password) {
            this.setIsError(true)
            this.setError(new UnknownError())
            console.log("Missing email or password");
            return;
        }

        try {
            this.setIsError(false)
            this.setError(null)
            this.setIsLoading(true);
            this.setIsLoaded(false);

            const userCredential: UserCredential = yield signInWithEmailAndPassword(auth, this.signInDto.email, this.signInDto.password)
            this.userStore.setUser(userCredential.user)
            onSuccess?.()
        } catch (error) {
            this.setIsError(true)
            this.setStep(1)

            if (isFirebaseError(error)) {
                if (error.code === "auth/invalid-credential") {
                    this.setError(new InvalidEmailOrPasswordError())
                } else {
                    console.log(error)
                    this.setError(new UnknownError())
                }
            } else {
                this.setError(new UnknownError())
            }
            this.error?.log()
        }
        this.setIsLoading(false);
        this.setIsLoaded(true);


    }
}

export {SignInFormStore}