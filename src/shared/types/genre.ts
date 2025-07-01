import {ID} from "./id.ts";
import {GenreType} from "./genre-type.ts";

export type Genre = {
    mal_id: ID,
    name: GenreType
    url:string;
    count: number;
}