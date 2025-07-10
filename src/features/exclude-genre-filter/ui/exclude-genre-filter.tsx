import {Select, SelectProps} from "antd"
import {useInjection} from "inversify-react";
import {Genre, ID} from "../../../shared/types";
import {GenresStore} from "../../../entities/genre/model/genres.store.ts";
import {observer} from "mobx-react";
import {selectExcludeGenresStyles} from "./exclude-genre-filter.styles.ts";
import {ExcludeGenreFilterStore} from "../model/exclude-genre-filter.store.ts";

export const SelectExcludeGenres = observer(() => {
    const genresStore = useInjection(GenresStore);
    const excludeGenreFilterStore = useInjection(ExcludeGenreFilterStore)

    const options: SelectProps['options'] = genresStore.genres.map(({mal_id, name}) => ({label: name, value: mal_id}));
    const selectedOptions:Genre[] = !genresStore.isLoading ?  excludeGenreFilterStore.selectedGenres.map(genresStore.getGenreById)
        .filter(item => typeof item !== "undefined") : [];

    return <Select
        css={selectExcludeGenresStyles}
        mode="multiple"
        optionFilterProp="label"
        allowClear
        loading={genresStore.isLoading}
        value={selectedOptions.map(({mal_id,name}) => ({label: name, value: mal_id}))}
        placeholder="Какие жанры исключить"
        onChange={(selectedGenres: ID[]) => excludeGenreFilterStore.setSelectedGenres(selectedGenres)}
        options={options}
    />

})