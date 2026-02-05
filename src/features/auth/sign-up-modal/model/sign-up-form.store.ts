import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {BaseLoadingStore} from "../../../../shared/model";
import {SignUpDto} from "../../../../shared/types/sign-up.dto.ts";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../../shared/api/firebase.ts";
import {EmailAlreadyExistsError, UnknownError} from "../../../../shared/model/errors.ts";
import {isFirebaseError} from "../../../../shared/lib/is-firebase-error.ts";
import {UserCredential} from "@firebase/auth";
import {UserStore} from "../../../../entities/user";

@injectable()
class SignUpFormStore  {
    @inject(UserStore) private readonly userStore!: UserStore;
    @inject(BaseLoadingStore) public readonly loadingStore!: BaseLoadingStore;

    constructor() {
        makeAutoObservable(this);

    }

    public *signUp(signUpDto: SignUpDto) {
        try {
            this.loadingStore.setIsError(false)
            this.loadingStore.setError(null)
            this.loadingStore.setIsLoading(true);
            this.loadingStore.setIsLoaded(false);

            const userCredential: UserCredential = yield createUserWithEmailAndPassword(
                auth,
                signUpDto.email,
                signUpDto.password
            )

            this.userStore.setUser(userCredential.user)
        } catch (error) {
            this.loadingStore.setIsError(true)
            if (isFirebaseError(error)) {
                if (error.code === "auth/email-already-in-use") {
                    this.loadingStore.setError(new EmailAlreadyExistsError())
                } else {
                    this.loadingStore.setError(new UnknownError())
                }
            } else {
                this.loadingStore.setError(new UnknownError())
            }
            this.loadingStore.error?.log()
        }
        this.loadingStore.setIsLoading(false);
        this.loadingStore.setIsLoaded(true);
    }
}

export {SignUpFormStore}