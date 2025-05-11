import "./show-favorites-button.scss";
import FavoriteIcon from '../../../../assets/images/favorites.svg?react';
import {GradientBorderedButton} from "../../gradient-bordered-button/gradient-bordered-button.tsx";

export function ShowFavoritesButton() {
    return <GradientBorderedButton className="show-favorites-button">
        <FavoriteIcon className="show-favorites-button__icon" width={14} height={16}/>
    </GradientBorderedButton>
}