import {profile} from "../show-profile.styles.ts";
import {BasePopup} from "../../../../../ui";
import {useInjection} from "inversify-react";
import {ProfilePopupStore} from "./profile-popup.store.ts";
import {ReactNode} from "react";
import {observer} from "mobx-react";
import {UserStore} from "../../../../../../entities/user";
import {ProfilePopupButton} from "./profile-popup-button/profile-popup-button.tsx";
import UserIcon from "../../../../../../assets/images/user.svg?react"
import SettingsIcon from "../../../../../../assets/images/settings-icon.svg?react"

import {buttonsStyles} from "./profile-popup.styles.ts";
import {ROUTES} from "../../../../../lib";
import {useTranslation} from "react-i18next";
import {SignOutButton} from "../../../../../../features/auth/sign-out-modal";

type PropsType = {
    JikanStatusSlot: ReactNode,
    AnimationsSwitchSlot: ReactNode
}

export const ProfilePopup = observer(({}: PropsType) => {
    const {t:tAuth} = useTranslation("auth")
    const profilePopupStore = useInjection(ProfilePopupStore)
    const userStore = useInjection(UserStore);

    return <BasePopup styles={profile} popupStore={profilePopupStore.popupStore}>
        {/*<h2 css={profileTitle}>Profile</h2>*/}
        <div>
            {userStore.user?.email || "no email"}
        </div>

        <div css={buttonsStyles}>

            <ProfilePopupButton icon={<UserIcon/>} >{tAuth("Sign Out")}</ProfilePopupButton>
            <ProfilePopupButton icon={<SettingsIcon/>} link={ROUTES.SETTINGS_PAGE}>Settings</ProfilePopupButton>
            <ProfilePopupButton icon={<SettingsIcon/>} link={ROUTES.HOME_PAGE}>Collections</ProfilePopupButton>

            <SignOutButton/>
        </div>
    </BasePopup>
})