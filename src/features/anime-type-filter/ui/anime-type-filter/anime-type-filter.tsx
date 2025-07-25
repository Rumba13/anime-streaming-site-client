import {animeTypeFilterStyles} from "./anime-type-filter.styles";
import {AnimeTypeFilterStore} from "../../model/anime-type-filter.store";
import {observer} from "mobx-react";
import {AnimeTypeCheckbox} from "../anime-type-checkbox/anime-type-checkbox";
import {animeTypes} from "../../../../shared/lib";

type PropsType = {
    animeTypeFilterStore:AnimeTypeFilterStore
}

export const AnimeTypeFilter = observer(({animeTypeFilterStore}:PropsType) => {
    return <div css={animeTypeFilterStyles}>
        {animeTypes.map(animeType => <AnimeTypeCheckbox
            key={animeType}
            animeType={animeType}
            onSelect={animeTypeFilterStore.toggleSelectedAnimeType}
            isSelected={animeTypeFilterStore.selectedAnimeType === animeType}/>)}
    </div>
})