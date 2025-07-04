import "./navigation.scss";
import {NavigationItem} from "../navigation-item/navigation-item.tsx";
import ArrowIcon from "@src/assets/images/arrow.svg?react"
import {useInjection} from "inversify-react";
import {observer} from "mobx-react";
import {BrowseGenresPopupStore} from "./browse-genres-popup/browse-genres-popup-store.ts";
import {ROUTES} from "../../../../lib/routes.ts";
import {BrowseGenresPopup} from "./browse-genres-popup/browse-genres-popup.tsx";
import clsx from "clsx/lite";
import {useTranslation} from "react-i18next";

export const Navigation = observer(() => {
    const { t } = useTranslation();
    const browseGenresPopupStore = useInjection(BrowseGenresPopupStore);

    const handleBrowserClick = (e: React.MouseEvent) => {
        browseGenresPopupStore.open(e);
        if (!browseGenresPopupStore.isOpened) {
            e.preventDefault()
        }
    }

    return <nav className="navigation">
        <NavigationItem title={t('Home')} link={ROUTES.HOME_PAGE}/>
        <NavigationItem
            className={clsx(browseGenresPopupStore.isOpened && "highlight")}
            title={t('Browse')}
            link={ROUTES.SEARCH_PAGE}
            onClick={handleBrowserClick}
        >
            <ArrowIcon className="navigation-item__icon"/>
            <BrowseGenresPopup/>
        </NavigationItem>
        <NavigationItem title={t('Trailers')} link={ROUTES.TRAILERS_PAGE}/>
    </nav>
})