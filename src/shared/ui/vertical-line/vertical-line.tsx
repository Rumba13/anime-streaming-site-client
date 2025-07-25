import {verticalLine} from "./vertical-line.styles";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    styles: Interpolation<Theme>
}

export function VerticalLine({styles}:PropsType) {
    return <div css={[verticalLine,styles]}></div>
}