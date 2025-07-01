import {observer} from "mobx-react";
import {BasePopupStore} from "../../model/base-popup.store.ts";
import {ReactNode, useEffect, useRef} from "react";
import {popupStyles} from "./base-popup.styles.ts";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    popupStore: BasePopupStore,
    children: ReactNode,
    styles?: Interpolation<Theme>
}

export const BasePopup = observer(({popupStore, children,styles}: PropsType) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        popupStore.setPopupRef(popupRef.current);
        return popupStore.dispose;
    }, []);

    return <div ref={popupRef} css={[popupStyles(popupStore.isOpened),styles]}>
        {children}
    </div>
})