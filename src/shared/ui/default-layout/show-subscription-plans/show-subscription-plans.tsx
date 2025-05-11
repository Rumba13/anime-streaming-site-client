import "./show-subscription-plans.scss";
import {GradientBorderedButton} from "../../gradient-bordered-button/gradient-bordered-button.tsx";
import CrownIcon from "../../../../assets/images/crown.svg?react"

export function ShowSubscriptionPlans() {
    return <GradientBorderedButton className="show-subscription-plans-button">
        <CrownIcon className="show-subscription-plans-button__icon" width={20} height={15}/>
        <span className="show-subscription-plans-button__title">Try Premium</span>
    </GradientBorderedButton>
}