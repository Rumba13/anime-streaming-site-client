import "./default-layout.styles.ts";
import {Header} from "./header/header.tsx";
import {FC, ReactNode} from "react";
import {Footer} from "./footer/footer.tsx";
import {defaultLayoutStyles} from "./default-layout.styles.ts";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    children: ReactNode,
    SearchSlot: FC,
    styles?: Interpolation<Theme>,
    LanguageSelectorSlot: FC,
    JikanStatusSlot: FC,
    AnimationsSwitchSlot: FC
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