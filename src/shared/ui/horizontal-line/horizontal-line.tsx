import "./horizontal-line.styles.ts";
import {horizontalLine} from "./horizontal-line.styles.ts";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    styles?: Interpolation<Theme>
}

export function HorizontalLine({styles}: PropsType) {
    return <div css={[horizontalLine, styles]}></div>
}