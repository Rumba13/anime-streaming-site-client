import {Select} from "antd"
import {useInjection} from "inversify-react";
import {GenreFilterStore} from "../model/genre-filter.store.ts";
import {Genre, ID} from "../../../shared/types";
import {selectGenresStyles} from "./select-genres.styles.ts";
import {GenresStore} from "../../../entities/genre";
import {observer} from "mobx-react";
import {genresToSelectOptions} from "../../../shared/lib/genres-to-select-options.tsx";
import { useTranslation } from "react-i18next";

type PropsType = {
    genreIdsToHide: ID[];
}

export const SelectGenres = observer(({genreIdsToHide}:PropsType) => {
    const genresStore = useInjection(GenresStore);
    const genreFilterStore = useInjection(GenreFilterStore)
    const filteredGenres: Genre[] = genresStore.genres.filter(({mal_id}) => !genreIdsToHide.includes(mal_id));
    const { t } = useTranslation();

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
            placeholder={t("Select Genres Placeholder")}
            onChange={genreFilterStore.setSelectedGenres}
            options={options}
        />
})