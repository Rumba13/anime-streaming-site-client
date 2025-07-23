import "./show-subscription-plans.styles.ts";
import CrownIcon from "../../../../../assets/images/crown.svg?react"
import {GradientBorderedButton} from "../../../../ui";
import {useTranslation} from "react-i18next";
import {
    showSubscriptionPlansButton,
    showSubscriptionPlansButtonIcon,
    showSubscriptionPlansButtonTitle
} from "./show-subscription-plans.styles.ts";

export function ShowSubscriptionPlans() {
    const {t} = useTranslation()

    return <GradientBorderedButton css={showSubscriptionPlansButton}>
        {/*<CrownIcon css={showSubscriptionPlansButtonIcon} width={20} height={15}/>*/}
        <span css={showSubscriptionPlansButtonTitle}>Log In</span>
    </GradientBorderedButton>
}
