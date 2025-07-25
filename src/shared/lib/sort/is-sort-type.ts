import {sortTypes} from "./sort-types";
import {SortType} from "../../types";

export const isSortType = (value: string) => {
    return sortTypes.includes(value as SortType);
}