import {errorStyles, fieldStyles, inputStyles} from "./field.styles.ts";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = React.InputHTMLAttributes<HTMLInputElement> & {
    styles?: Interpolation<Theme>,
    errorMessage?: string,
    postfix?:string
}


export const Field = ({styles,errorMessage, ...props}: PropsType) => {

    const isError = !!errorMessage;
    return <label css={[fieldStyles(isError), styles]}>
        <input css={[inputStyles, styles]} {...props}/>
        {isError && <span css={errorStyles}>{errorMessage}</span>}
    </label>
}
