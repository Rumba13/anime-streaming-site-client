import {optionStyles, signInOptionsStyles, titleStyles} from "./sign-in-options.styles.ts";
import AppleIcon from "../../../../../assets/images/apple-icon.svg?react"
import GoogleIcon from "../../../../../assets/images/google-icon.svg?react"
import {useTranslation} from "react-i18next";


export const SignInOptions = () => {
    const {t} = useTranslation()

    return <div css={signInOptionsStyles}>
        <button css={optionStyles}>
            <GoogleIcon/>
            <span css={titleStyles}>{t("Continue with Google")}</span>
        </button>
        <button css={optionStyles}>
            <AppleIcon/>
            <span css={titleStyles}>{t("Continue with Apple")}</span>
        </button>
    </div>
}