import "./header.styles.ts";
import {FC} from "react";
import {Navigation} from "./navigation/navigation.tsx";
import {ShowFavoritesButton} from "./show-favorites-button/show-favorites-button.tsx";
import {ShowProfile} from "./show-profile/show-profile.tsx";
import {ShowSubscriptionPlans} from "./show-subscription-plans/show-subscription-plans.tsx";
import {Logo} from "../../../ui";
import {headerMiddleStyles, headerRightStyles, headerStyles} from "./header.styles.ts";

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