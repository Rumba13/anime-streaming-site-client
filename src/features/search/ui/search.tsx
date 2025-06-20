import "./search.scss"
import {GradientBorderedButton} from "../../../shared/ui";
import SearchIcon from "../../../assets/images/search.svg?react";

export function Search() {
    return <GradientBorderedButton className="search" >
        <SearchIcon className="search__icon" width={18} height={18}/>
        <span className="search__title">Search</span>
    </GradientBorderedButton>
}