import "./show-subscription-plans.styles";
import {GradientBorderedButton} from "../../../../ui";
import {useTranslation} from "react-i18next";
import {
    openSignInModalButtonStyles,
    buttonTitleStyles
} from "./show-subscription-plans.styles";

type PropsType = {
    openSignInModal: () => void,
}

export function OpenSignInModalButton({openSignInModal}:PropsType) {
    const {t} = useTranslation()

    return <GradientBorderedButton css={openSignInModalButtonStyles} onClick={openSignInModal}>
        <span css={buttonTitleStyles}>{t("Log In")}</span>
    </GradientBorderedButton>
}
