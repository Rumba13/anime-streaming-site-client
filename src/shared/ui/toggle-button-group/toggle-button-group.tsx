import {ToggleButtonGroupItem} from "./toggle-button-group-item";
import {Option} from "../../types";
import {Interpolation, Theme} from "@emotion/react";
import {Key} from "react";
import {toggleButtonGroupStyles} from "./toggle-button-group.styles";

export type PropsType<ValueType> = {
    options: Option<ValueType>[];
    styles?: Interpolation<Theme>;
    onChange: (value: ValueType) => void;
    value: ValueType | null;
}

export const ToggleButtonGroup = <ValueType extends Key | null, >({
                                                                      value,
                                                                      options,
                                                                      onChange,
                                                                      styles
                                                                  }: PropsType<ValueType>) => {

    return <div css={[toggleButtonGroupStyles, styles]}>
        {options.map(option => <ToggleButtonGroupItem
                key={option.value}
                option={option}
                selected={option.value === value}
                onClick={() => onChange(option.value)}
            />
        )}
    </div>
};
