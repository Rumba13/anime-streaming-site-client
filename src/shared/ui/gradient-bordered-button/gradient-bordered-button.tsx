import "./gradient-bordered-button.scss";
import {HTMLAttributes, ReactNode} from "react";
import clsx from "clsx/lite";

type PropsType = {
    children: ReactNode,
} & HTMLAttributes<HTMLButtonElement>

export function GradientBorderedButton({children, className, ...buttonProps}: PropsType) {
    return <button className={clsx("gradient-bordered-button", className)} {...buttonProps} >
        {children}
    </button>
}

