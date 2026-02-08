import {Select} from "antd"
import {useInjection} from "inversify-react";
import {GenreFilterStore} from "../model/genre-filter.store";
import {Genre, ID} from "../../../shared/types";
import {selectGenresStyles} from "./select-genres.styles";
import {GenresStore} from "../../../entities/genre";
import {observer} from "mobx-react";
import {genresToSelectOptions} from "../../../shared/lib";
import { useTranslation } from "react-i18next";

type PropsType = {
    genreIdsToHide: ID[];
}

export const SelectGenres = observer(({genreIdsToHide}:PropsType) => {
    const genresStore = useInjection(GenresStore);
    const genreFilterStore = useInjection(GenreFilterStore)
    const filteredGenres: Genre[] = genresStore.genres.filter(({mal_id}) => !genreIdsToHide.includes(mal_id));
    const { t:tSearch } = useTranslation("search");

    const getSelectedGenres = (): Genre[] => {
        if (genresStore.isLoading) return []

        return genreFilterStore.selectedGenres.map(genresStore.getGenreById)
            .filter(item => item !== undefined)
    }

    const options = genresToSelectOptions(filteredGenres);
    const selectedOptions = genresToSelectOptions(getSelectedGenres())

    return <Select
            css={selectGenresStyles}
            mode="multiple"
            allowClear
            optionFilterProp="label"
            loading={genresStore.isLoading}
            value={selectedOptions}
            placeholder={tSearch("select_genres_placeholder")}
            onChange={genreFilterStore.setSelectedGenres}
            options={options}
        />
})