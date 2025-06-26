import "./navigation.styles.ts";
import {NavigationItem} from "./navigation-item/navigation-item.tsx";
import ArrowIcon from "@src/assets/images/arrow.svg?react"
import {useInjection} from "inversify-react";
import {observer} from "mobx-react";
import {BrowseGenresPopupStore} from "./browse-genres-popup/browse-genres-popup-store.ts";
import {ROUTES} from "../../../../lib/routes.ts";
import {BrowseGenresPopup} from "./browse-genres-popup/browse-genres-popup.tsx";
import {useTranslation} from "react-i18next";
import {navigationItemHighlightStyles, navigationItemIconStyles, navigationStyles} from "./navigation.styles.ts";

export const Navigation = observer(() => {
    const { t } = useTranslation();
    const browseGenresPopupStore = useInjection(BrowseGenresPopupStore);

    const handleOpenPopupClick = (e: React.MouseEvent) => {
        if (!browseGenresPopupStore.isOpened) {
            e.preventDefault()
        }
        browseGenresPopupStore.open(e);
    }

    return <nav css={navigationStyles}>
        <NavigationItem title={t('Home')} link={ROUTES.HOME_PAGE}/>
        <NavigationItem
            styles={browseGenresPopupStore.isOpened && navigationItemHighlightStyles}
            title={t('Browse')}
            link={ROUTES.SEARCH_PAGE}
            onClick={handleOpenPopupClick}
        >
            <ArrowIcon css={navigationItemIconStyles}/>
            <BrowseGenresPopup/>
        </NavigationItem>
        <NavigationItem title={t('Trailers')} link={ROUTES.TRAILERS_PAGE}/>
    </nav>
})