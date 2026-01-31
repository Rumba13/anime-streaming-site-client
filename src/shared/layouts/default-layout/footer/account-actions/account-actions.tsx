import {ListItem} from "../../../../ui";
import {useTranslation} from "react-i18next";
import {
    accountActionsItemStyles,
    accountActionsListStyles,
    accountActionsStyles,
    accountActionsTitleStyles
} from "./account-actions.styles";

export function AccountActions() {
    const {t:tAuth} = useTranslation("auth")
    const {t:tCommon} = useTranslation("common")

    return <div css={accountActionsStyles}>
        <span css={accountActionsTitleStyles}>{tCommon("Account")}</span>
        <ul css={accountActionsListStyles}>
            <ListItem styles={accountActionsItemStyles} link="1">{tAuth("Create Account")}</ListItem>
            <ListItem styles={accountActionsItemStyles} link="1">{tAuth("Log In")}</ListItem>
        </ul>
    </div>
}