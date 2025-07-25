import "./horizontal-line.styles";
import {horizontalLine} from "./horizontal-line.styles";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    styles?: Interpolation<Theme>
}

export function HorizontalLine({styles}: PropsType) {
    return <div css={[horizontalLine, styles]}></div>
}