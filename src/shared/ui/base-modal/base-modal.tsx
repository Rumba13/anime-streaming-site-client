import {observer} from "mobx-react";
import {BasePopupStore} from "../../model";
import {ReactNode, useEffect, useRef} from "react";
import {crossStyles, modalContainerStyles, popupStyles} from "./base-modal.styles";
import {Interpolation, Theme} from "@emotion/react";
import CrossIcon from "../../../assets/images/cross.svg?react"

type PropsType = {
    popupStore: BasePopupStore,
    children: ReactNode,
    styles?: Interpolation<Theme>
}

export const BaseModal = observer(({popupStore, children, styles}: PropsType) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        popupStore.setPopupRef(popupRef.current);
        return popupStore.dispose;
    }, []);

    return <div ref={popupRef} css={[popupStyles(popupStore.isOpened, popupStore.wasOpened), styles]}>
        <div css={modalContainerStyles}>
            <CrossIcon css={crossStyles} onClick={popupStore.close}/>
            {children}
        </div>
    </div>
})