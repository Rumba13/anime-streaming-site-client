import "./show-subscription-plans.styles";
import {GradientBorderedButton} from "../../../../ui";
import {useTranslation} from "react-i18next";
import {
    showSubscriptionPlansButton,
    showSubscriptionPlansButtonTitle
} from "./show-subscription-plans.styles";

export function ShowSubscriptionPlans() {
    const {t} = useTranslation()

    return <GradientBorderedButton css={showSubscriptionPlansButton}>
        {/*<CrownIcon css={showSubscriptionPlansButtonIcon} width={20} height={15}/>*/}
        <span css={showSubscriptionPlansButtonTitle}>Log In</span>
    </GradientBorderedButton>
}
