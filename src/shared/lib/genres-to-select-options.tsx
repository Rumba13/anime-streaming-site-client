import {Genre} from "../types";
import {SelectProps} from "antd";
import {genreTypeToTranslationKey} from "./i18n/genre-type-to-translation-key.ts";

export const genresToSelectOptions = (genres: Genre[]): SelectProps["options"] =>
    genres.map(({mal_id, name}) => ({label: genreTypeToTranslationKey(name), value: mal_id}));