import {searchResultListStyles} from "./search-results-list.styles.ts";
import {match, P} from "ts-pattern";
import {Loading} from "../../../../shared/ui";
import {loadingStyles} from "../search-page.styles.ts";
import {useInjection} from "inversify-react";
import {AnimeCardSwitchStore} from "../../../../features/anime-card-switch/model/anime-card-switch.store.ts";
import {SearchAnimeStore} from "../../../../features/search/model/search-anime.store.ts";
import {useTranslation} from "react-i18next";
import {observer} from "mobx-react";
import {Anime} from "../../../../shared/types/anime.ts";
import {ErrorMessage} from "../../../../shared/ui/error-message/error-message.tsx";
import {PatternError} from "../../../../shared/model/errors.ts";

type SearchResultPropsType = {
    data: Anime[];
    AnimeCard: React.FC<Anime>;
}
const SearchResults = ({data, AnimeCard}: SearchResultPropsType) => <>{data.map(anime => <AnimeCard key={anime.mal_id + anime.title} {...anime} />)}</>

type PropsType = {
    searchAnimeStore: SearchAnimeStore;
}

export const SearchResultsList = observer(({searchAnimeStore}: PropsType) => {
    const animeCardSwitchStore = useInjection(AnimeCardSwitchStore);
    const {isLoading, isFirstLoad} = searchAnimeStore
    const {currentAnimeCardType, getCardComponent} = animeCardSwitchStore
    const {t} = useTranslation();

    const isFirstLoadingShown = isLoading && isFirstLoad
    const isDarkened = isLoading && !isFirstLoad;
    const isFlexLayout = currentAnimeCardType === "Horizontal" || isFirstLoadingShown

    const AnimeCard = getCardComponent();

    const content = match(searchAnimeStore)
        .with({isLoading: true, isFirstLoad: true}, () => <Loading styles={loadingStyles}/>)
        .with({isLoading: false, pagination: {data: []}}, () => <>{t("Nothing Found")}</>)
        .with({isLoading: true}, ({pagination}) =>
            <SearchResults data={pagination?.data || []} AnimeCard={AnimeCard}/>
        )
        .with({isLoading: false, pagination: P.not(null)}, ({pagination}) =>
            <SearchResults data={pagination.data} AnimeCard={AnimeCard}/>
        )
        .with({isError: true, error: P.not(null)}, ({error}) => {
            return <ErrorMessage error={error}/>
        })
        .otherwise(() => <ErrorMessage error={new PatternError("Pattern matching error in search results")}/>);

    return <div css={searchResultListStyles(isFlexLayout, isDarkened)}>{content}</div>
})