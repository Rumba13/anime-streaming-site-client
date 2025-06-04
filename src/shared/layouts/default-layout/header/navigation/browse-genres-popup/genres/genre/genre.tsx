import "./genre.scss";
import {Genre as GenreType} from "../../../../../../../types/genre.ts";
import {useTranslation} from "react-i18next";

type PropsType = GenreType;

export function Genre({name, id}: PropsType) {
    const {t} = useTranslation();

    return <a className="genre" href={id}>{t(name)}</a>
}