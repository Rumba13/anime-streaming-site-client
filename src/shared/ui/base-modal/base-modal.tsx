import {observer} from "mobx-react";
import {ReactNode, useEffect, useRef} from "react";
import {crossStyles, modalContainerStyles, modalStyles} from "./base-modal.styles";
import {Interpolation, Theme} from "@emotion/react";
import CrossIcon from "../../../assets/images/cross.svg?react"
import {BaseModalStore} from "../../model";

type PropsType = {
    modalStore: BaseModalStore,
    children: ReactNode,
    styles?: Interpolation<Theme>
}

export const BaseModal = observer(({modalStore, children, styles}: PropsType) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        modalStore.setModalRef(popupRef.current);
        return modalStore.dispose;
    }, []);

    return <div ref={popupRef} css={[modalStyles(modalStore.isOpened, modalStore.wasOpened), styles]}>
        <div css={modalContainerStyles}>
            <CrossIcon css={crossStyles} onClick={modalStore.close}/>
            {children}
        </div>
    </div>
})