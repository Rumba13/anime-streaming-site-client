import {GradientBorderedButton} from "../../../shared/ui";
import SearchIcon from "../../../assets/images/search.svg?react";
import {searchTitle} from "./search.styles.ts";
import {useTranslation} from "react-i18next";

export function Search() {
    const {t} = useTranslation();
    return <GradientBorderedButton>
        <SearchIcon width={18} height={18}/>
        <span css={searchTitle}>{t("Search Button")}</span>
    </GradientBorderedButton>
}