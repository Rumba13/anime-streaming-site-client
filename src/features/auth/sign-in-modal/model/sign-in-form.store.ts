import {injectable} from "inversify";
import {flow, makeAutoObservable,} from "mobx";
import {SignInDto} from "../../../../shared/types/sign-in.dto.ts";
import {BaseLoadingStore} from "../../../../shared/model";
import {UserCredential} from "@firebase/auth";
import {auth} from "../../../../shared/api/firebase.ts";
import {isFirebaseError} from "../../../../shared/lib/is-firebase-error.ts";
import {InvalidEmailOrPasswordError, UnknownError} from "../../../../shared/model/errors.ts";
import {inject} from "inversify";
import {UserStore} from "../../../../entities/user";
import {signInWithEmailAndPassword} from "firebase/auth";
import {SignInFormStepsStore} from "./sign-in-form-steps.store.ts";

@injectable()
class SignInFormStore {
    @inject(UserStore) private readonly userStore!: UserStore;
    @inject(BaseLoadingStore) public readonly loadingStore!: BaseLoadingStore;
    @inject(SignInFormStepsStore) public readonly signInFormStepsStore!: SignInFormStepsStore;

    constructor() {
        makeAutoObservable(this, {
            signIn: flow.bound
        });
    }

    public * signIn(signInDto: SignInDto): Promise<void> {
        if (!signInDto.email || !signInDto.password) {
            this.loadingStore.setIsError(true);
            this.loadingStore.setError(new UnknownError());
            console.log("Missing email or password");
            throw new Error("Missing email or password");
        }

        try {
            this.loadingStore.setIsError(false);
            this.loadingStore.setError(null);
            this.loadingStore.setIsLoading(true);
            this.loadingStore.setIsLoaded(false);

            const userCredential: UserCredential = yield signInWithEmailAndPassword(
                auth,
                signInDto.email,
                signInDto.password
            );
            this.userStore.setUser(userCredential.user);

            return Promise.resolve();
        } catch (error) {
            this.loadingStore.setIsError(true);

            if (isFirebaseError(error)) {
                if (error.code === "auth/invalid-credential") {
                    this.loadingStore.setError(new InvalidEmailOrPasswordError());
                } else {
                    console.log(error);
                    this.loadingStore.setError(new UnknownError());
                }
            } else {
                this.loadingStore.setError(new UnknownError());
            }

            this.loadingStore.error?.log();
            throw this.loadingStore.error!;
        } finally {
            this.reset();
            this.loadingStore.setIsLoading(false);
            this.loadingStore.setIsLoaded(true);
        }
    }

    private reset() {
        this.signInFormStepsStore.resetSteps()
        //reset form values
    }

}

export {SignInFormStore}