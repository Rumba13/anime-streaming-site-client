import "./show-profile.styles.ts";
import UserIcon from "../../../../../assets/images/user.svg?react"
import {GradientBorderedButton} from "../../../../ui";
import {JikanStatus} from "../../../../../features/jikan-status";
import {useInjection} from "inversify-react";
import {ProfilePopupStore} from "./profile-popup.store.ts";
import {observer} from "mobx-react";
import {
    noBackgroundStyles,
    profile,
    profileTitle,
    showProfileButton,
    showProfileButtonWrapper
} from "./show-profile.styles.ts";
import {AnimationsSwitch} from "../../../../../features/animations-switch";
import {BasePopup} from "../../../../ui/base-popup/base-popup.tsx";

export const ShowProfile = observer(() => {
    const profilePopupStore = useInjection(ProfilePopupStore)

    return <div css={showProfileButtonWrapper}>
        <GradientBorderedButton css={showProfileButton} onClick={profilePopupStore.open}>
            <UserIcon/>
        </GradientBorderedButton>

        <BasePopup styles={profile} popupStore={profilePopupStore}>
            <h2 css={profileTitle}>Profile</h2>

            <JikanStatus styles={noBackgroundStyles}/>
            <AnimationsSwitch styles={noBackgroundStyles}/>
        </BasePopup>
    </div>
})