import {sortTypes} from "./sort-types.ts";
import {SortType} from "../../../shared/types";

export const isSortType = (value: string) => {
    return sortTypes.includes(value as SortType);
}