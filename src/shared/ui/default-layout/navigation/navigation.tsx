import "./navigation.scss";
import {NavigationItem} from "../navigation-item/navigation-item.tsx";
import {ROUTES} from "../../../lib/routes.ts";
import ArrowIcon from "@src/assets/images/arrow.svg?react"
import {BrowseGenresPopup} from "../browse-genres-popup/browse-genres-popup.tsx";
import {useInjection} from "inversify-react";
import {BrowseGenresPopupStore} from "../browse-genres-popup/browse-genres-popup-store.ts";
import {observer} from "mobx-react";

export const Navigation = observer(() => {
    const browseGenresPopupStore = useInjection(BrowseGenresPopupStore);

    const handleBrowserClick = (e: React.MouseEvent) => {
        browseGenresPopupStore.open(e);
        if (!browseGenresPopupStore.isOpened) {
            e.preventDefault()
        }
    }

    return <nav className="navigation">
        <NavigationItem title="Home" link={ROUTES.HOME_PAGE}/>
        <NavigationItem title="Browse" link={ROUTES.SEARCH_PAGE} onClick={handleBrowserClick}>
            <ArrowIcon className="navigation-item__icon"/>
            <BrowseGenresPopup/>
        </NavigationItem>
        <NavigationItem title="Trailers" link={ROUTES.TRAILERS_PAGE}/>
    </nav>
})