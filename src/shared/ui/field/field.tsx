import {errorStyles, fieldStyles, inputStyles} from "./field.styles.ts";
import {Interpolation, Theme} from "@emotion/react";
import {ReactNode} from "react";

type PropsType = React.InputHTMLAttributes<HTMLInputElement> & {
    styles?: Interpolation<Theme>,
    errorMessage?: string,
    postfix?:string,
    children?: ReactNode
}

export const Field = ({styles,errorMessage, children, ...props}: PropsType) => {

    const isError = !!errorMessage;
    return <label css={[fieldStyles(isError), styles]}>
        <input css={[inputStyles, styles]} {...props}/>
        {children}
        {isError && <span css={errorStyles}>{errorMessage}</span>}
    </label>
}
