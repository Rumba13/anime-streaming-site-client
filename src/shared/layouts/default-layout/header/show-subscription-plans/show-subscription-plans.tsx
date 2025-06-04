import "./show-subscription-plans.scss";
import CrownIcon from "../../../../../assets/images/crown.svg?react"
import {GradientBorderedButton} from "../../../../ui";
import {useTranslation} from "react-i18next";

export function ShowSubscriptionPlans() {
    const {t} = useTranslation()

    return <GradientBorderedButton className="show-subscription-plans-button">
        <CrownIcon className="show-subscription-plans-button__icon" width={20} height={15}/>
        <span className="show-subscription-plans-button__title">{t("Try Premium")}</span>
    </GradientBorderedButton>
}