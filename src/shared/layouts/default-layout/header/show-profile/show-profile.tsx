import "./show-profile.scss";
import UserIcon from "../../../../../assets/images/user.svg?react"
import {GradientBorderedButton} from "../../../../ui";
import {JikanStatus} from "../../../../../features/jikan-status";
import {useInjection} from "inversify-react";
import {ProfilePopupStore} from "./profile-popup.store.ts";
import clsx from "clsx/lite";
import {observer} from "mobx-react";
import {useEffect, useRef} from "react";

export const ShowProfile = observer(() => {
    const profilePopupStore = useInjection(ProfilePopupStore)
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        profilePopupStore.setPopupRef(popupRef.current);
        return profilePopupStore.dispose;
    }, []);

    return <div className="show-profile-button__wrapper">
        <GradientBorderedButton className="show-profile-button" onClick={profilePopupStore.open}>
            <UserIcon/>
        </GradientBorderedButton>
        <div className={clsx("profile", profilePopupStore.isOpened && "open")} ref={popupRef}>
            <h2 className="profile__title">Profile</h2>
            <JikanStatus/>
        </div>
    </div>
})