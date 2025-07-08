import {DefaultLayout} from "../../../shared/layouts";
import {Search} from "../../../features/search";
import {LanguageSelector} from "../../../features/language-selector";
import {animeList, filtersStyles, searchBarStyles, searchPageContentStyles} from "./search-page.styles.ts";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useInjection} from "inversify-react";
import {AnimeService} from "../../../shared/api/anime-service.ts";
import {Anime} from "../../../shared/types/anime.ts";
import {URL_PARAMS} from "../../../shared/lib/url-params.ts";
import {Filters} from "./filters/filters.tsx";
import {AnimeCardSwitchStore} from "../../../features/anime-card-switch/model/anime-card-switch.store.ts";
import {observer} from "mobx-react";
import {AnimeCardSwitcher} from "../../../features/anime-card-switch/ui/anime-card-switcher.tsx";

export const SearchPage = observer(() => {
    const [searchParams] = useSearchParams();
    const animeService = useInjection(AnimeService);
    const [a, seta] = useState<Anime[] | null>(null);
    const animeCardSwitchStore = useInjection(AnimeCardSwitchStore);

    useEffect(() => {
        const genresString = searchParams.get(URL_PARAMS.GENRES);

        if (!genresString) return;

        const genreIds = genresString.split(",");

        void animeService.search(genreIds).then(result => {
            if (!result?.data) return;
            seta(result.data);
        })

    }, [])

    const AnimeCard = animeCardSwitchStore.getCardComponent();

    return <DefaultLayout SearchSlot={Search} LanguageSelectorSlot={LanguageSelector}>
        <div css={searchPageContentStyles}>
            <Filters styles={filtersStyles}/>
            <div css={searchBarStyles}>
                <AnimeCardSwitcher/>
            </div>
            <div css={animeList(animeCardSwitchStore.currentAnimeCardType)}>
                {a?.map(anime => <AnimeCard {...anime} />)}
            </div>
        </div>
    </DefaultLayout>
})