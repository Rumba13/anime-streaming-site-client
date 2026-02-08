import "./browse-genres-popup.styles";
import {useInjection} from "inversify-react";
import {BrowseGenresPopupStore} from "./browse-genres-popup-store";
import {observer} from "mobx-react";
import {Genres} from "./genres/genres";
import {VerticalLine} from "../../../../../ui";
import {QuickNavigation} from "../../../../../ui";
import { useTranslation } from 'react-i18next';
import {
    browseGenresStyles,
    verticalLineStyles
} from "./browse-genres-popup.styles";
import {BasePopup} from "../../../../../ui";

export const BrowseGenresPopup = observer(() => {
    const { t } = useTranslation();
    const browseGenresPopupStore = useInjection(BrowseGenresPopupStore);

    return <BasePopup popupStore={browseGenresPopupStore} styles={browseGenresStyles}>
        <QuickNavigation title={t('featured')} />
        <VerticalLine styles={verticalLineStyles} />
        <Genres />
    </BasePopup>
});