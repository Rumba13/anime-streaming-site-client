import "./genre.scss";
import {Genre as GenreType} from "../../../../../../../types/genre.ts";

type PropsType = GenreType;

export function Genre({name, id}: PropsType) {
    return <a className="genre" href={id}>{name}</a>
}