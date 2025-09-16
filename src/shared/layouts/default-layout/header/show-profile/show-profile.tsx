import "./show-profile.styles";
import UserIcon from "../../../../../assets/images/user.svg?react"
import {GradientBorderedButton} from "../../../../ui";
import {useInjection} from "inversify-react";
import {ProfilePopupStore} from "./profile-popup/profile-popup.store.ts";
import {observer} from "mobx-react";
import {
    showProfileButton,
    showProfileButtonWrapper
} from "./show-profile.styles";
import { ReactNode} from "react";
import {ProfilePopup} from "./profile-popup/profile-popup.tsx";

type PropsType = {
    JikanStatusSlot: ReactNode,
    AnimationsSwitchSlot: ReactNode
}

export const ShowProfile = observer(({JikanStatusSlot,AnimationsSwitchSlot}:PropsType) => {
    const profilePopupStore = useInjection(ProfilePopupStore)

    return <div css={showProfileButtonWrapper}>
        <GradientBorderedButton css={showProfileButton} onClick={profilePopupStore.popupStore.open}>
            <UserIcon/>
        </GradientBorderedButton>

        <ProfilePopup AnimationsSwitchSlot={AnimationsSwitchSlot} JikanStatusSlot={JikanStatusSlot}/>
    </div>
})