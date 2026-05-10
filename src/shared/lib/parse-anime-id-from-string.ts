import {ID} from "../types";

export const parseAnimeIdFromString = (id: string): ID | null => {
    if (Number.isInteger(+id) && +id > 0) {
        return +id;
    }

    return null;
}