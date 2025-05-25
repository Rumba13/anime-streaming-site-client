import "./header.scss";
import {FC} from "react";
import {Navigation} from "./navigation/navigation.tsx";
import {ShowFavoritesButton} from "./show-favorites-button/show-favorites-button.tsx";
import {ShowProfile} from "./show-profile/show-profile.tsx";
import {ShowSubscriptionPlans} from "./show-subscription-plans/show-subscription-plans.tsx";
import {Logo} from "../../../ui";

type PropsType = {
    SearchSlot: FC
}

export function Header({SearchSlot}: PropsType) {
    return <header className="header">
        <Logo className="header__logo"/>

        <div className="header__middle">
            <Navigation/>
            <SearchSlot/>
        </div>

        <div className="header__right">
            <ShowFavoritesButton/>
            <ShowProfile/>
            <ShowSubscriptionPlans/>
        </div>
    </header>
}