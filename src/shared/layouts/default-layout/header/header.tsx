import "./header.styles";
import {FC} from "react";
import {Navigation} from "./navigation/navigation";
import {ShowFavoritesButton} from "./show-favorites-button/show-favorites-button";
import {ShowProfile} from "./show-profile/show-profile";
import {ShowSubscriptionPlans} from "./show-subscription-plans/show-log-in-popup";
import {Logo} from "../../../ui";
import {headerMiddleStyles, headerRightStyles, headerStyles} from "./header.styles";

type PropsType = {
    SearchSlot: FC,
    JikanStatusSlot:FC
    AnimationsSwitchSlot:FC
}

export function Header({SearchSlot,JikanStatusSlot,AnimationsSwitchSlot}: PropsType) {
    return <header css={headerStyles}>
        <Logo/>

        <div css={headerMiddleStyles}>
            <Navigation/>
            <SearchSlot/>
        </div>

        <div css={headerRightStyles}>
            <ShowFavoritesButton/>
            <ShowProfile JikanStatusSlot={JikanStatusSlot} AnimationsSwitchSlot={AnimationsSwitchSlot}/>
            <ShowSubscriptionPlans/>
        </div>
    </header>
}