import {injectable} from "inversify";
import {flow, makeAutoObservable, } from "mobx";
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
class SignInFormStore {
    @inject(UserStore) private readonly userStore!: UserStore;
    @inject(BaseLoadingStore) public readonly loadingStore!: BaseLoadingStore;

    constructor() {
        makeAutoObservable(this, {
            signIn: flow.bound
        });
    }

    public step: number = 1;
    public setStep = (step: number) => this.step = step;

    public signInDto: Partial<SignInDto> = {}
    public updateSignInDto = (signInDto: Partial<SignInDto>) => {
        this.signInDto = {...this.signInDto, ...signInDto}
    };
    public setSignInDto = (signInDto: Partial<SignInDto>) => {
        this.signInDto = signInDto
    };

    public* signIn(onSuccess?: () => void) {

        if (!this.signInDto.email || !this.signInDto.password) {
            this.loadingStore.setIsError(true)
            this.loadingStore.setError(new UnknownError())
            console.log("Missing email or password");
            return;
        }

        try {
            this.loadingStore.setIsError(false)
            this.loadingStore.setError(null)
            this.loadingStore.setIsLoading(true);
            this.loadingStore.setIsLoaded(false);

            const userCredential: UserCredential = yield signInWithEmailAndPassword(auth, this.signInDto.email, this.signInDto.password)
            this.userStore.setUser(userCredential.user)
            onSuccess?.()
        } catch (error) {
            this.loadingStore.setIsError(true)
            this.setStep(1)

            if (isFirebaseError(error)) {
                if (error.code === "auth/invalid-credential") {
                    this.loadingStore.setError(new InvalidEmailOrPasswordError())
                } else {
                    console.log(error)
                    this.loadingStore.setError(new UnknownError())
                }
            } else {
                this.loadingStore.setError(new UnknownError())
            }
            this.loadingStore.error?.log()
        }
        this.reset()
        this.loadingStore.setIsLoading(false);
        this.loadingStore.setIsLoaded(true);
    }

    private reset() {
        this.setSignInDto({})
        this.setStep(1)
    }

}

export {SignInFormStore}