import {inject, injectable} from "inversify";
import {makeObservable, override} from "mobx";
import {BaseError, BaseLoadingStore} from "../../../../shared/model";
import {SignUpDto} from "../../../../shared/types/sign-up.dto.ts";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../../shared/api/firebase.ts";
import {EmailAlreadyExistsError, UnknownError} from "../../../../shared/model/errors.ts";
import {isFirebaseError} from "../../../../shared/lib/is-firebase-error.ts";
import {UserCredential} from "@firebase/auth";
import {UserStore} from "../../../../entities/user";

@injectable()
class SignUpFormStore extends BaseLoadingStore {
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
        });

    }

    public signUp = async (signUpDto: SignUpDto) => {
        try {
            this.setIsError(false)
            this.setError(null)
            this.setIsLoading(true);
            this.setIsLoaded(false);

            const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, signUpDto.email, signUpDto.password)
            this.userStore.setUser(userCredential.user)
        } catch (error) {
            this.setIsError(true)
            if (isFirebaseError(error)) {
                if (error.code === "auth/email-already-in-use") {
                    this.setError(new EmailAlreadyExistsError())
                } else {
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

export {SignUpFormStore}