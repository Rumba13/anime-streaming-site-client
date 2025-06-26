import "./browse-genres-popup.styles.ts";
import {useInjection} from "inversify-react";
import {BrowseGenresPopupStore} from "./browse-genres-popup-store.ts";
import {observer} from "mobx-react";
import {Genres} from "./genres/genres.tsx";
import {VerticalLine} from "../../../../../ui";
import {QuickNavigation} from "../../../../../ui/quick-navigation";
import { useTranslation } from 'react-i18next';
import {useEffect, useRef} from "react";
import {browseGenresOpenedStyles, browseGenresStyles, verticalLineStyles} from "./browse-genres-popup.styles.ts";

export const BrowseGenresPopup = observer(() => {
    const { t } = useTranslation();
    const popupRef = useRef<HTMLDivElement>(null);
    const browseGenresPopupStore = useInjection(BrowseGenresPopupStore);

    useEffect(() => {
        browseGenresPopupStore.setPopupRef(popupRef.current);
        return browseGenresPopupStore.dispose;
    }, []);

    return <div css={[browseGenresStyles, browseGenresPopupStore.isOpened && browseGenresOpenedStyles]} ref={popupRef}>
            <QuickNavigation title={t('Featured')} />
            <VerticalLine styles={verticalLineStyles} />
            <Genres />
        </div>
    ;
});