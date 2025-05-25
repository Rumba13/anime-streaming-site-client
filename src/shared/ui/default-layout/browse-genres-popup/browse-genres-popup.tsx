import "./browse-genres-popup.scss";
import {useInjection} from "inversify-react";
import {BrowseGenresPopupStore} from "./browse-genres-popup-store.ts";
import clsx from "clsx/lite";
import {observer} from "mobx-react";

export const BrowseGenresPopup = observer(() => {
    const browseGenresPopupStore = useInjection(BrowseGenresPopupStore);

    return <div className={clsx("browse-genres", browseGenresPopupStore.isOpened && "opened")}>
        browse-genres{String(browseGenresPopupStore.isOpened)}
    </div>
})