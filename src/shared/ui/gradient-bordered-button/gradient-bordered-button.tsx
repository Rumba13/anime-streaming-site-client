import { HTMLAttributes, ReactNode } from "react";
import { gradientBorderedButton } from "./gradient-bordered-button.styles";
import { Interpolation, Theme } from "@emotion/react";

type PropsType = {
    children: ReactNode;
    styles?: Interpolation<Theme>;
} & HTMLAttributes<HTMLButtonElement>;

export function GradientBorderedButton({ children, styles, ...buttonProps }: PropsType) {
    return (
        <button
            css={(theme) => [styles,gradientBorderedButton(theme), ]}
            {...buttonProps}
        >
            {children}
        </button>
    );
}