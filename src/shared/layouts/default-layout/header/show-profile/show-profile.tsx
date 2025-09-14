import "./show-profile.styles";
import UserIcon from "../../../../../assets/images/user.svg?react"
import {GradientBorderedButton} from "../../../../ui";
import {useInjection} from "inversify-react";
import {ProfilePopupStore} from "./profile-popup.store";
import {observer} from "mobx-react";
import {
    profile,
    profileTitle,
    showProfileButton,
    showProfileButtonWrapper
} from "./show-profile.styles";
import {BasePopup} from "../../../../ui";
import { ReactNode} from "react";
import {UserStore} from "../../../../../entities/user";
import { SignOutButton} from "../../../../../features/auth/sign-out-modal";

type PropsType = {
    JikanStatusSlot: ReactNode,
    AnimationsSwitchSlot: ReactNode
}

export const ShowProfile = observer(({JikanStatusSlot,AnimationsSwitchSlot}:PropsType) => {
    const profilePopupStore = useInjection(ProfilePopupStore)
    const userStore = useInjection(UserStore);

    return <div css={showProfileButtonWrapper}>
        <GradientBorderedButton css={showProfileButton} onClick={profilePopupStore.popupStore.open}>
            <UserIcon/>
        </GradientBorderedButton>

        <BasePopup styles={profile} popupStore={profilePopupStore.popupStore}>
            <h2 css={profileTitle}>Profile</h2>
            {JikanStatusSlot}
            {AnimationsSwitchSlot}
            <div>
            {userStore.user?.email || "no email"}
            </div>
           <SignOutButton/>
        </BasePopup>
    </div>
})