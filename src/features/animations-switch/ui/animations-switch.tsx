import {AnimationsSwitchStore} from "../model/animations-switch.store.ts";
import {useInjection} from "inversify-react";
import {animationsSwitchStyle, markStyle, statusStyle, titleStyle} from "./animation-switch.styles.ts";
import {observer} from "mobx-react";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    styles?: Interpolation<Theme>
}

export const AnimationsSwitch = observer(({styles}:PropsType) => {
    const animationsSwitchStore = useInjection(AnimationsSwitchStore);

    const handleToggle = () => {
        animationsSwitchStore.setIsAnimationsEnabled(!animationsSwitchStore.isAnimationsEnabled);
    };

    return <div css={[animationsSwitchStyle,styles]} onClick={handleToggle} style={{ cursor: 'pointer' }}>
        <div css={markStyle(animationsSwitchStore.isAnimationsEnabled)}></div>
        <h2 css={titleStyle}>Анимации: </h2>
        <span css={statusStyle}>
             {animationsSwitchStore.isAnimationsEnabled ? "Включены" : "Выключены"}
        </span>
    </div>
})