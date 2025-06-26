import {GradientBorderedButton} from "../../../shared/ui";
import SearchIcon from "../../../assets/images/search.svg?react";
import {searchTitle} from "./search.styles.ts";

export function Search() {
    return <GradientBorderedButton>
        <SearchIcon width={18} height={18}/>
        <span css={searchTitle}>Search</span>
    </GradientBorderedButton>
}