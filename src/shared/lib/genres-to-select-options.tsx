import {Genre} from "../types";
import {SelectProps} from "antd";

export const genresToSelectOptions = (genres: Genre[]): SelectProps["options"] =>
    genres.map(({mal_id, name}) => ({label: name, value: mal_id}));