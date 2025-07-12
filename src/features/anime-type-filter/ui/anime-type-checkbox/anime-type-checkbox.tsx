import {AnimeTypeCard} from "../../../../entities/anime-type";
import {AnimeType} from "../../../../shared/types/anime-type.ts";
import {checkboxInputStyles, checkboxLabelStyles} from "./anime-type-checkbox.styles";

type PropsType = {
    animeType: AnimeType;
    isSelected: boolean;
    onSelect?: (animeType: AnimeType) => void;
}

export const AnimeTypeCheckbox = ({animeType, isSelected, onSelect}: PropsType) => {
    return <div>
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
            <AnimeTypeCard animeType={animeType} isHighlighted={isSelected}/>
        </label>
    </div>
}