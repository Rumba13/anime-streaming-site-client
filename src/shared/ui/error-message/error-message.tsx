import {BaseError} from "../../model/base-error.ts";
import {errorMessageStyles} from "./error-message.styles.ts";

type PropsType = {
    error: BaseError
}

export const ErrorMessage = ({error}: PropsType) => {
    return <div css={errorMessageStyles}>
        <h3>An Error Occurred</h3>
        <h4>{error.type}</h4>
        <span>{error.message}</span>
    </div>
}