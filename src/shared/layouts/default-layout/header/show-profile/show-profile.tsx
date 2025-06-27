import "./show-profile.styles.ts";
import UserIcon from "../../../../../assets/images/user.svg?react"
import {GradientBorderedButton} from "../../../../ui";
import {JikanStatus} from "../../../../../features/jikan-status";
import {useInjection} from "inversify-react";
import {ProfilePopupStore} from "./profile-popup.store.ts";
import {observer} from "mobx-react";
import {useEffect, useRef} from "react";
import {profile, profileTitle, showProfileButton, showProfileButtonWrapper} from "./show-profile.styles.ts";
import {AnimationsSwitch} from "../../../../../features/animations-switch";

export const ShowProfile = observer(() => {
    const profilePopupStore = useInjection(ProfilePopupStore)
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        profilePopupStore.setPopupRef(popupRef.current);
        return profilePopupStore.dispose;
    }, []);

    return <div css={showProfileButtonWrapper}>
        <GradientBorderedButton css={showProfileButton} onClick={profilePopupStore.open}>
            <UserIcon/>
        </GradientBorderedButton>
        <div css={profile(profilePopupStore.isOpened)} ref={popupRef}>
            <h2 css={profileTitle}>Profile</h2>
            <JikanStatus/>
            <AnimationsSwitch/>
        </div>
    </div>
})