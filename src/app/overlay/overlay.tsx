import {observer} from "mobx-react";
import {overlayStyles} from "./overlay.styles.ts";
import {BaseModalStore} from "../../shared/model";
import {useCallback, useEffect} from "react";

export const Overlay = observer(() => {
    const isOverlayShown = BaseModalStore.activeModal !== null;

    const preventScroll = useCallback((e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, []);

    useEffect(() => {
        if (isOverlayShown) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('wheel', preventScroll, {passive: false});
            document.addEventListener('touchmove', preventScroll, {passive: false});
        } else {
            document.body.style.overflow = 'unset';
            document.removeEventListener('wheel', preventScroll);
            document.removeEventListener('touchmove', preventScroll);
        }

    }, [isOverlayShown]);


    return <div css={overlayStyles(isOverlayShown)}></div>
})