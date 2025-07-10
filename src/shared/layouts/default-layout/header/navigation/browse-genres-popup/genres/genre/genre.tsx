import "./genre.styles.ts";
import {Genre as GenreType} from "../../../../../../../types/genre.ts";
import {useTranslation} from "react-i18next";
import {genreStyles} from "./genre.styles.ts";
import {ROUTES} from "../../../../../../../lib/routes.ts";
import {Link} from "react-router-dom";

type PropsType = GenreType;

export function Genre({name, mal_id}: PropsType) {
    const {t} = useTranslation();

    return <Link css={genreStyles} to={ROUTES.SEARCH_PAGE_SEARCH_GENRE(mal_id)}>{t(name)}</Link>
}