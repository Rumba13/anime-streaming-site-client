import "./show-profile.styles.ts";
import UserIcon from "../../../../../assets/images/user.svg?react"
import {GradientBorderedButton} from "../../../../ui";
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
import {BasePopup} from "../../../../ui";
import {FC} from "react";

type PropsType = {
    JikanStatusSlot: FC,
    AnimationsSwitchSlot: FC
}

export const ShowProfile = observer(({JikanStatusSlot,AnimationsSwitchSlot}:PropsType) => {
    const profilePopupStore = useInjection(ProfilePopupStore)

    return <div css={showProfileButtonWrapper}>
        <GradientBorderedButton css={showProfileButton} onClick={profilePopupStore.open}>
            <UserIcon/>
        </GradientBorderedButton>

        <BasePopup styles={profile} popupStore={profilePopupStore}>
            <h2 css={profileTitle}>Profile</h2>
            <JikanStatusSlot styles={noBackgroundStyles}/>
            <AnimationsSwitchSlot styles={noBackgroundStyles}/>
        </BasePopup>
    </div>
})