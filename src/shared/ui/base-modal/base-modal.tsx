import {observer} from "mobx-react";
import {BasePopupStore} from "../../model";
import {ReactNode, useEffect, useRef} from "react";
import {popupStyles} from "./base-modal.styles";
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

    return <div ref={popupRef} css={[popupStyles(popupStore.isOpened, popupStore.wasOpened),styles]}>
        {children}
    </div>
})