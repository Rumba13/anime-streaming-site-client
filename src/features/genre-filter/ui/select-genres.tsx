import {Select, SelectProps} from "antd"
import {useInjection} from "inversify-react";
import {GenreFilterStore} from "../model/genre-filter.store.ts";
import {Genre, ID} from "../../../shared/types";
import {selectGenresStyles} from "./select-genres.styles.ts";
import {GenresStore} from "../../../entities/genre/model/genres.store.ts";
import {observer} from "mobx-react";

export const SelectGenres = observer(() => {
    const genresStore = useInjection(GenresStore);
    const genreFilterStore = useInjection(GenreFilterStore)

    const options: SelectProps['options'] = genresStore.genres.map(({mal_id, name}) => ({label: name, value: mal_id}));
    const selectedOptions:Genre[] = !genresStore.isLoading ?  genreFilterStore.selectedGenres.map(genresStore.getGenreById)
        .filter(item => typeof item !== "undefined") : [];


    return <Select
            css={selectGenresStyles}
            mode="multiple"
            allowClear
            optionFilterProp="label"
            loading={genresStore.isLoading}
            value={selectedOptions.map(({mal_id,name}) => ({label: name, value: mal_id}))}
            placeholder="По каким жанрам искать"
            onChange={(selectedGenres: ID[]) => genreFilterStore.setSelectedGenres(selectedGenres)}
            options={options}
        />

})