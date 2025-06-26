import "./show-favorites-button.styles.ts";
import FavoriteIcon from '../../../../../assets/images/favorites.svg?react';
import {GradientBorderedButton} from "../../../../ui";
import {showFavoritesButton} from "./show-favorites-button.styles.ts";

export function ShowFavoritesButton() {
    return <GradientBorderedButton styles={showFavoritesButton}>
        <FavoriteIcon className="show-favorites-button__icon" width={14} height={16}/>
    </GradientBorderedButton>
}