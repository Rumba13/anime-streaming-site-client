import {optionStyles, signInOptionsStyles, titleStyles} from "./sign-in-options.styles.ts";
import AppleIcon from "../../../../../assets/images/apple-icon.svg?react"
import GoogleIcon from "../../../../../assets/images/google-icon.svg?react"
import {useTranslation} from "react-i18next";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import {FirebaseUser} from "../../../../../shared/types/firebase-user.ts";
import {useInjection} from "inversify-react";
import {UserStore} from "../../../../../entities/user";

const signInWithGoogle = async (setUser: (user: FirebaseUser) => void, onSuccess?: () => void) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
        const result = await signInWithPopup(auth, provider)
        const user = result.user;
        setUser(user);
        onSuccess?.();
    } catch (error) {
        console.error(error)
    }
}

type PropsType = {
    onSuccess?: () => void,
}

export const SignInOptions = ({onSuccess}: PropsType) => {
    const {t:tAuth} = useTranslation("auth")
    const userStore = useInjection(UserStore)

    return <div css={signInOptionsStyles}>
        <button css={optionStyles} onClick={() => signInWithGoogle(userStore.setUser, onSuccess)}>
            <GoogleIcon/>
            <span css={titleStyles}>{tAuth("continue_with_google")}</span>
        </button>
        <button css={optionStyles}>
            <AppleIcon/>
            <span css={titleStyles}>{tAuth("continue_with_apple")}</span>
        </button>
    </div>
}