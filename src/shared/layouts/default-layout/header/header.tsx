import "./header.styles";
import {ReactNode, useEffect} from "react";
import {Navigation} from "./navigation/navigation";
import {ShowFavoritesButton} from "./show-favorites-button/show-favorites-button";
import {ShowProfile} from "./show-profile/show-profile";
import {OpenSignInModalButton} from "./show-subscription-plans/show-log-in-popup";
import {Logo} from "../../../ui";
import {headerMiddleStyles, headerRightStyles, headerStyles} from "./header.styles";
import {useInjection} from "inversify-react";
import {UserStore} from "../../../../entities/user";
import {observer} from "mobx-react";

type PropsType = {
    SearchSlot: ReactNode,
    JikanStatusSlot: ReactNode
    AnimationsSwitchSlot: ReactNode,
    openSignInModal: () => void,

}

export const Header = observer(({SearchSlot, JikanStatusSlot, AnimationsSwitchSlot, openSignInModal}: PropsType) => {
    const userStore = useInjection(UserStore);

    return <header css={headerStyles}>
        <Logo/>
        <div css={headerMiddleStyles}>
            <Navigation/>
            {SearchSlot}
        </div>

        <div css={headerRightStyles}>
            <ShowFavoritesButton/>
            {userStore.isSignedIn
                ? <ShowProfile JikanStatusSlot={JikanStatusSlot} AnimationsSwitchSlot={AnimationsSwitchSlot}/>
                : <OpenSignInModalButton openSignInModal={openSignInModal}/>
            }
        </div>
    </header>
})