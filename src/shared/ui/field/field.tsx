import {fieldStyles} from "./field.styles.ts";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = React.InputHTMLAttributes<HTMLInputElement> & {
    styles?: Interpolation<Theme>
}

export const Field = ({styles, ...props}: PropsType) => {
    return <input css={[fieldStyles, styles]} {...props}/>
}