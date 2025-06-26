import "./genre.styles.ts";
import {Genre as GenreType} from "../../../../../../../types/genre.ts";
import {useTranslation} from "react-i18next";
import {genreStyles} from "./genre.styles.ts";

type PropsType = GenreType;

export function Genre({name, id}: PropsType) {
    const {t} = useTranslation();

    return <a css={genreStyles} href={id}>{t(name)}</a>
}