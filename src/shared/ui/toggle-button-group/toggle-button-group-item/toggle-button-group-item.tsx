import {Option} from "../../../types";
import {Interpolation, Theme} from "@emotion/react";
import {toggleButtonGroupItemStyles} from "./toggle-button-group-item.styles";

export type PropsType<ValueType> = {
    option: Option<ValueType>;
    selected: boolean;
    onClick: () => void;
    styles?: Interpolation<Theme>;
}

export const ToggleButtonGroupItem = <ValueType, >({
                                                       option, selected, onClick, styles
                                                   }: PropsType<ValueType>) => {
    return <button
        type="button"
        css={[toggleButtonGroupItemStyles(selected), styles]}
        aria-pressed={selected}
        onClick={onClick}
        title={option.label}
    >
        {option.label}
    </button>;
};