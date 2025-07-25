import {BaseError} from "../../model";
import {errorMessageStyles} from "./error-message.styles";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    error: BaseError,
    styles?:Interpolation<Theme>
}

export const ErrorMessage = ({error,styles}: PropsType) => {
    return <div css={[errorMessageStyles,styles]}>
        <h3>An Error Occurred</h3>
        <h4>{error.type}</h4>
        <span>{error.message}</span>
    </div>
}