import {ID} from "./id";
import {GenreType} from "./genre-type";

export type Genre = {
    mal_id: ID,
    name: GenreType
    url:string;
    count: number;
}