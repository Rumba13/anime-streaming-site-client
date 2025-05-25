import "./show-subscription-plans.scss";
import CrownIcon from "../../../../../assets/images/crown.svg?react"
import {GradientBorderedButton} from "../../../../ui";

export function ShowSubscriptionPlans() {
    return <GradientBorderedButton className="show-subscription-plans-button">
        <CrownIcon className="show-subscription-plans-button__icon" width={20} height={15}/>
        <span className="show-subscription-plans-button__title">Try Premium</span>
    </GradientBorderedButton>
}