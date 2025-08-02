import {observer} from "mobx-react";
import {overlayStyles} from "./overlay.styles.ts";
import {BaseModalStore} from "../../shared/model";

export const Overlay = observer(() => {
    const isOverlayShown = BaseModalStore.activeModal !== null;

    return <div css={overlayStyles(isOverlayShown)}></div>
})