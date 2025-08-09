import {Field} from "../field";
import {Interpolation, Theme} from "@emotion/react";
import {buttonStyles, passwordFieldStyles} from "./password-field.styles.ts";
import EyeIcon from "../../../assets/images/eye.svg?react"
import CrossedEyeIcon from "../../../assets/images/crossed-eye.svg?react"
import React from "react";

type PropsType = React.InputHTMLAttributes<HTMLInputElement> & {
    styles?: Interpolation<Theme>,
    errorMessage?: string,
    isPasswordShown: boolean,
    onPasswordVisibilityIconClick: () => void
}


export const PasswordField = ({isPasswordShown, onPasswordVisibilityIconClick, ...props}: PropsType) => {

    const handleButtonClick = (event: React.MouseEvent) => {
        onPasswordVisibilityIconClick()
        event.stopPropagation()
    }

    return <div css={passwordFieldStyles}>
        <button css={buttonStyles} onClick={handleButtonClick} type="button">
            {isPasswordShown ? <CrossedEyeIcon/> : <EyeIcon/>}
        </button>
        <Field type={isPasswordShown ? "text" : "password"} {...props}/>
    </div>
}