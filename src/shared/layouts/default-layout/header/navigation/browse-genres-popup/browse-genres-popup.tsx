import "./browse-genres-popup.scss";
import {useInjection} from "inversify-react";
import {BrowseGenresPopupStore} from "./browse-genres-popup-store.ts";
import clsx from "clsx/lite";
import {observer} from "mobx-react";
import {Genres} from "./genres/genres.tsx";
import {VerticalLine} from "../../../../../ui";
import {QuickNavigation} from "../../../../../ui/quick-navigation";
import { useTranslation } from 'react-i18next';
import {useEffect, useRef} from "react";

export const BrowseGenresPopup = observer(() => {
    const { t } = useTranslation();
    const popupRef = useRef<HTMLDivElement>(null);
    const browseGenresPopupStore = useInjection(BrowseGenresPopupStore);

    useEffect(() => {
        browseGenresPopupStore.setPopupRef(popupRef.current);
        return browseGenresPopupStore.dispose;
    }, []);

    return <div className={clsx("browse-genres", browseGenresPopupStore.isOpened && "opened")} ref={popupRef}>
            <QuickNavigation title={t('Featured')} />
            <VerticalLine />
            <Genres />
        </div>
    ;
});