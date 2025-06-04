import "./account-actions.scss"
import {ListItem} from "../../../../ui/list-item/list-item.tsx";
import {useTranslation} from "react-i18next";

export function AccountActions() {
    const {t} = useTranslation()
    return <div className="account-actions">
        <span className="account-actions__title">{t("Account")}</span>
        <ul className="account-actions-list">
            <ListItem className="account-actions__item" link="1">{t("Create Account")}</ListItem>
            <ListItem className="account-actions__item" link="1">{t("Log In")}</ListItem>
        </ul>
    </div>
}