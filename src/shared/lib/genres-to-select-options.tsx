import {Genre} from "../types";
import {SelectProps} from "antd";
import {genreTypeToTranslationKey} from "./i18n/genre-type-to-translation-key.ts";
import i18n from "i18next";

export const genresToSelectOptions = (genres: Genre[]): SelectProps["options"] =>
    genres.map(({mal_id, name}) => ({label: i18n.t(genreTypeToTranslationKey(name), {ns: "genres"}), value: mal_id}));