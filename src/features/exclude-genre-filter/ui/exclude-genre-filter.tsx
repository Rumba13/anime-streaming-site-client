import {Select} from "antd"
import {useInjection} from "inversify-react";
import {Genre, ID} from "../../../shared/types";
import {GenresStore} from "../../../entities/genre";
import {observer} from "mobx-react";
import {selectExcludeGenresStyles} from "./exclude-genre-filter.styles.ts";
import {ExcludeGenreFilterStore} from "../model/exclude-genre-filter.store.ts";
import {genresToSelectOptions} from "../../../shared/lib";
import { useTranslation } from "react-i18next";

type PropsType = {
    genreIdsToHide: ID[]
}

export const SelectExcludeGenres = observer(({genreIdsToHide}: PropsType) => {
    const genresStore = useInjection(GenresStore);
    const excludeGenreFilterStore = useInjection(ExcludeGenreFilterStore)
    const { t } = useTranslation();

    const filteredGenres: Genre[] = genresStore.genres.filter(({mal_id}) => !genreIdsToHide.includes(mal_id));

    const getSelectedGenres = (): Genre[] => {
        if (genresStore.isLoading) return []

        return excludeGenreFilterStore.selectedGenres.map(genresStore.getGenreById)
            .filter(item => item !== undefined)
    }

    const selectedOptions = genresToSelectOptions(getSelectedGenres())
    const options = genresToSelectOptions(filteredGenres);

    return <Select
        css={selectExcludeGenresStyles}
        mode="multiple"
        optionFilterProp="label"
        allowClear
        loading={genresStore.isLoading}
        value={selectedOptions}
        placeholder={t("Select Excluded Genres Placeholder")}
        onChange={excludeGenreFilterStore.setSelectedGenres}
        options={options}
    />
})