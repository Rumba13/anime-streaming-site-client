import {AnimeTypeCard} from "../../../../entities/anime-type";
import {AnimeType} from "../../../../shared/types/anime-type.ts";
import {
    checkboxInputStyles,
    checkboxLabelStyles,
    checkboxStyles,
    checkboxWrapperStyles
} from "./anime-type-checkbox.styles";
import CheckboxMark from "../../../../assets/images/checkbox-mark.svg?react"

type PropsType = {
    animeType: AnimeType;
    isSelected: boolean;
    onSelect?: (animeType: AnimeType) => void;
}

export const AnimeTypeCheckbox = ({animeType, isSelected, onSelect}: PropsType) => {
    return <div css={checkboxWrapperStyles}>
        <input
            type="checkbox"
            id={`anime-type-${animeType}`}
            checked={isSelected}
            onChange={() => onSelect?.(animeType)}
            css={checkboxInputStyles}
        />
        <label
            htmlFor={`anime-type-${animeType}`}
            css={checkboxLabelStyles}
        >
            <div css={checkboxStyles}>
                {isSelected && <CheckboxMark/>}
            </div>
            <AnimeTypeCard animeType={animeType} isHighlighted={isSelected}/>
        </label>
    </div>
}