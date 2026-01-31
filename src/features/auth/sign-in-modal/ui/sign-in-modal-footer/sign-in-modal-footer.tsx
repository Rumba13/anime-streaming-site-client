import {useTranslation} from "react-i18next";
import {footerStyles} from "../sign-in-modal.styles.ts";
import {modalHighlightTextStyles} from "../../../../../shared/ui";
import { memo } from "react";

type PropsType = {
    openSignUpModal: () => void,
}

export const SignInModalFooter = memo(({openSignUpModal}: PropsType) => {
    const {t:tAuth} = useTranslation("auth")

    return <div css={footerStyles}>
        {tAuth("New to our platform?")}
        &nbsp;
        <button css={modalHighlightTextStyles} onClick={openSignUpModal}>{tAuth("Sign up now!")}</button>
    </div>
})