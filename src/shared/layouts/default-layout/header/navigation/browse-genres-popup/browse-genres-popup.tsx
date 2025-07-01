import "./browse-genres-popup.styles.ts";
import {useInjection} from "inversify-react";
import {BrowseGenresPopupStore} from "./browse-genres-popup-store.ts";
import {observer} from "mobx-react";
import {Genres} from "./genres/genres.tsx";
import {VerticalLine} from "../../../../../ui";
import {QuickNavigation} from "../../../../../ui/quick-navigation";
import { useTranslation } from 'react-i18next';
import {
    browseGenresStyles,
    verticalLineStyles
} from "./browse-genres-popup.styles.ts";
import {BasePopup} from "../../../../../ui/base-popup/base-popup.tsx";

export const BrowseGenresPopup = observer(() => {
    const { t } = useTranslation();
    const browseGenresPopupStore = useInjection(BrowseGenresPopupStore);

    return <BasePopup popupStore={browseGenresPopupStore} styles={browseGenresStyles}>
        <QuickNavigation title={t('Featured')} />
        <VerticalLine styles={verticalLineStyles} />
        <Genres />
    </BasePopup>
});