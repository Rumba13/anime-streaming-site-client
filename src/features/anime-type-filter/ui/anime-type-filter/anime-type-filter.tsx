import {animeTypeFilterStyles} from "./anime-type-filter.styles.ts";
import {AnimeTypeCard, animeTypes} from "../../../entities/anime-type";
import {useInjection} from "inversify-react";
import {AnimeTypeFilterStore} from "../model/anime-type-filter.store.ts";
import {observer} from "mobx-react";

export const AnimeTypeFilter = observer(() => {
    const animeTypeFilterStore = useInjection(AnimeTypeFilterStore)

    return <div css={animeTypeFilterStyles}>
        {animeTypes.map(animeType => <AnimeTypeCard
            animeType={animeType}
            onClick={animeTypeFilterStore.toggleAnimeTypeSelected}
            isHighlighted={animeTypeFilterStore.selectedAnimeTypes.includes(animeType)}/>)}
    </div>
})