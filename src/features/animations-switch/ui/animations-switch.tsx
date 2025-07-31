import {AnimationsSwitchStore} from "../model/animations-switch.store";
import {animationsSwitchStyle, markStyle, statusStyle, titleStyle} from "./animation-switch.styles";
import {observer} from "mobx-react";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    styles?: Interpolation<Theme>,
    animationsSwitchStore: AnimationsSwitchStore
}

export const AnimationsSwitch = observer(({styles,animationsSwitchStore}:PropsType) => {

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