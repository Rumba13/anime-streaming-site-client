import "./show-subscription-plans.styles";
import {GradientBorderedButton} from "../../../../ui";
import {useTranslation} from "react-i18next";
import {
    showSubscriptionPlansButton,
    showSubscriptionPlansButtonTitle
} from "./show-subscription-plans.styles";

type PropsType = {
    openSignInModal: () => void,
}

export function ShowSubscriptionPlans({openSignInModal}:PropsType) {
    const {t} = useTranslation()

    return <GradientBorderedButton css={showSubscriptionPlansButton} onClick={openSignInModal}>
        <span css={showSubscriptionPlansButtonTitle}>{t("Log In")}</span>
    </GradientBorderedButton>
}
