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
    AnimationsSwitchSlot: ReactNode
}

export function DefaultLayout({
                                  children,
                                  SearchSlot,
                                  styles,
                                  LanguageSelectorSlot,
                                  JikanStatusSlot,
                                  AnimationsSwitchSlot
                              }: PropsType) {
    return <div css={[defaultLayoutStyles, styles]}>
        <Header SearchSlot={SearchSlot} JikanStatusSlot={JikanStatusSlot} AnimationsSwitchSlot={AnimationsSwitchSlot}/>
        {children}
        <Footer LanguageSelectorSlot={LanguageSelectorSlot}/>
    </div>
}