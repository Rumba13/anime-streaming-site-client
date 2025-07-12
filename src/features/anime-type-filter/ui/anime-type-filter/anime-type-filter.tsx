import {animeTypeFilterStyles} from "./anime-type-filter.styles.ts";
import {animeTypes} from "../../../../entities/anime-type";
import {useInjection} from "inversify-react";
import {AnimeTypeFilterStore} from "../../model/anime-type-filter.store.ts";
import {observer} from "mobx-react";
import {AnimeTypeCheckbox} from "../anime-type-checkbox/anime-type-checkbox.tsx";

export const AnimeTypeFilter = observer(() => {
    const animeTypeFilterStore = useInjection(AnimeTypeFilterStore)

    return <div css={animeTypeFilterStyles}>
        {animeTypes.map(animeType => <AnimeTypeCheckbox
            animeType={animeType}
            onSelect={animeTypeFilterStore.toggleSelectedAnimeType}
            isSelected={animeTypeFilterStore.selectedAnimeType === animeType}/>)}
    </div>
})