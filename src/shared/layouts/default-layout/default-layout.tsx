import "./default-layout.styles";
import {Header} from "./header/header";
import {ReactNode} from "react";
import {Footer} from "./footer/footer";
import {defaultLayoutStyles} from "./default-layout.styles";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    children: ReactNode,
    SearchSlot: ReactNode,
    styles?: Interpolation<Theme>,
    LanguageSelectorSlot: ReactNode,
    JikanStatusSlot: ReactNode,
    AnimationsSwitchSlot: ReactNode,
    SignInModalSlot: ReactNode,
    SignUpModalSlot: ReactNode,
    openSignInModal: () => void,
}

export function DefaultLayout({
                                  children,
                                  SearchSlot,
                                  styles,
                                  LanguageSelectorSlot,
                                  JikanStatusSlot,
                                  AnimationsSwitchSlot,
                                  SignInModalSlot,
                                  SignUpModalSlot,
                                  openSignInModal
                              }: PropsType) {
    return <div css={[defaultLayoutStyles, styles]}>
        <Header openSignInModal={openSignInModal} SearchSlot={SearchSlot} JikanStatusSlot={JikanStatusSlot} AnimationsSwitchSlot={AnimationsSwitchSlot}/>
        {SignUpModalSlot}
        {SignInModalSlot}
        {children}
        <Footer LanguageSelectorSlot={LanguageSelectorSlot}/>
    </div>
}