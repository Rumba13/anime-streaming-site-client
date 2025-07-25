import {ListItem} from "../../../../ui";
import {useTranslation} from "react-i18next";
import {
    accountActionsItemStyles,
    accountActionsListStyles,
    accountActionsStyles,
    accountActionsTitleStyles
} from "./account-actions.styles";

export function AccountActions() {
    const {t} = useTranslation()

    return <div css={accountActionsStyles}>
        <span css={accountActionsTitleStyles}>{t("Account")}</span>
        <ul css={accountActionsListStyles}>
            <ListItem styles={accountActionsItemStyles} link="1">{t("Create Account")}</ListItem>
            <ListItem styles={accountActionsItemStyles} link="1">{t("Log In")}</ListItem>
        </ul>
    </div>
}