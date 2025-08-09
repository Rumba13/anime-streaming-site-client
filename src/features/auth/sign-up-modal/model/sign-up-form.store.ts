import {injectable} from "inversify";
import {makeObservable, override} from "mobx";
import {BaseError, BaseLoadingStore} from "../../../../shared/model";
import {SignUpDto} from "../../../../shared/types/sign-up.dto.ts";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../../shared/api/firebase.ts";
import {EmailAlreadyExistsError, UnknownError} from "../../../../shared/model/errors.ts";
import {isFirebaseError} from "../../../../shared/lib/is-firebase-error.ts";

@injectable()
class SignUpFormStore extends BaseLoadingStore {
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

            const userCredential = await createUserWithEmailAndPassword(auth, signUpDto.email, signUpDto.password)
            console.log(userCredential)
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
        }
        this.setIsLoading(false);
        this.setIsLoaded(true);
    }
}

export {SignUpFormStore}