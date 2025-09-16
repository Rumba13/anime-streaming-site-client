import {useTranslation} from "react-i18next";
import {footerStyles} from "../sign-in-modal.styles.ts";
import {modalHighlightTextStyles} from "../../../../../shared/ui";
import { memo } from "react";

type PropsType = {
    openSignUpModal: () => void,
}

export const SignInModalFooter = memo(({openSignUpModal}: PropsType) => {
    const {t} = useTranslation()

    return <div css={footerStyles}>
        {t("New to our platform?")}
        &nbsp;
        <button css={modalHighlightTextStyles} onClick={openSignUpModal}>{t("Sign up now!")}</button>
    </div>
})