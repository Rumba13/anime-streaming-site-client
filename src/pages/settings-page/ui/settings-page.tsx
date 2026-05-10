import {DefaultLayout} from "../../../shared/layouts";
import {LanguageSelector} from "../../../features/language-selector";
import {useInjection} from "inversify-react";
import {observer} from "mobx-react";
import {JikanStatus} from "../../../features/jikan-status";
import {AnimationsSwitch, AnimationsSwitchStore} from "../../../features/animations-switch";
import {noBackgroundStyles} from "../../home-page/ui/home-page.styles.ts";
import {SignUpModal, SignUpModalStore} from "../../../features/auth/sign-up-modal";
import {SignInModal, SignInModalStore} from "../../../features/auth/sign-in-modal";
import {contentStyles, titleStyles} from "./settings-page.styles.ts";
import {useTranslation} from "react-i18next";

export const SettingsPage = observer(() => {
    const animationsSwitchStore = useInjection(AnimationsSwitchStore);
    const signInModalStore = useInjection(SignInModalStore);
    const signUpModalStore = useInjection(SignUpModalStore);
    const {t:tCommon} = useTranslation("common")

    return <DefaultLayout
        openSignInModal={signInModalStore.modalStore.open}
        SignUpModalSlot={<SignUpModal openSignInModal={signInModalStore.modalStore.open}/>}
        SignInModalSlot={<SignInModal openSignUpModal={signUpModalStore.modalStore.open}/>}
        SearchSlot={<></>}
        LanguageSelectorSlot={<LanguageSelector/>}
        JikanStatusSlot={<JikanStatus styles={noBackgroundStyles}/>}
        AnimationsSwitchSlot={<AnimationsSwitch styles={noBackgroundStyles} animationsSwitchStore={animationsSwitchStore}/>}>
        <div css={contentStyles}>
        <h2 css={titleStyles}>{tCommon("settings")}</h2>
            <JikanStatus styles={noBackgroundStyles}/>
            <AnimationsSwitch styles={noBackgroundStyles} animationsSwitchStore={animationsSwitchStore}/>
        </div>
    </DefaultLayout>
})