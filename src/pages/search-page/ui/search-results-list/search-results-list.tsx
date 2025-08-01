import {errorMessageStyles, nothingFoundStyles, searchResultListStyles} from "./search-results-list.styles";
import {match, P} from "ts-pattern";
import {Loading} from "../../../../shared/ui";
import {loadingStyles} from "../search-page.styles";
import {useInjection} from "inversify-react";
import {AnimeCardSwitchStore} from "../../../../features/anime-card-switch";
import {SearchAnimeStore} from "../../../../features/search";
import {useTranslation} from "react-i18next";
import {observer} from "mobx-react";
import {Anime} from "../../../../shared/types";
import {ErrorMessage} from "../../../../shared/ui";
import {BaseError, PatternError} from "../../../../shared/model";
import {FC} from "react";

type SearchResultPropsType = {
    data: Anime[];
    AnimeCard: FC<Anime>;
}
const SearchResults = ({data, AnimeCard}: SearchResultPropsType) => <>{data.map((anime, index) =>
    <AnimeCard key={anime.mal_id + anime.title + index} {...anime} />)}</>

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

    const firstLoadingState = {isFirstLoad: true}
    const secondLoadingState = {isLoading: true, isFirstLoad: false}
    const loadedState = {isLoading: false, pagination: P.not(null).and(P.not([]))}
    const nothingFoundState = {isLoading: false, pagination: {data: []}}
    const errorState = {isError: true}

    const content = match(searchAnimeStore)
        .with(errorState, ({error}) =>
            <ErrorMessage styles={errorMessageStyles} error={error || new BaseError("Unknown Error")}/>)
        .with(firstLoadingState, () =>
            <Loading styles={loadingStyles}/>)
        .with(nothingFoundState, () =>
            <div css={nothingFoundStyles}>{t("Nothing Found")}</div>)
        .with(secondLoadingState, ({pagination}) =>
            <SearchResults data={pagination?.data || []} AnimeCard={AnimeCard}/>)
        .with(loadedState, ({pagination}) =>
            <SearchResults data={pagination.data} AnimeCard={AnimeCard}/>)
        .otherwise((store) =>
            <ErrorMessage styles={errorMessageStyles} error={new PatternError("Pattern matching error in search results", store)}/>);

    return <div css={searchResultListStyles(isFlexLayout, isDarkened)}>{content}</div>
})