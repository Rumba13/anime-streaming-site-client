import {observer} from "mobx-react";
import {ReactNode, useEffect, useRef} from "react";
import {
    modalContentStyles,
    crossStyles, footerStyles,
    headerStyles,
    modalContainerStyles,
    modalStyles,
    titleStyles
} from "./base-modal.styles";
import {Interpolation, Theme} from "@emotion/react";
import CrossIcon from "../../../assets/images/close.svg?react"
import {BaseModalStore} from "../../model";

type PropsType = {
    modalStore: BaseModalStore,
    children: ReactNode,
    styles?: Interpolation<Theme>,
    contentStyles?: Interpolation<Theme>,
    footer?: ReactNode,
    title: ReactNode | string,
}

export const BaseModal = observer(({modalStore, children, styles, footer, title, contentStyles}: PropsType) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        modalStore.setModalRef(popupRef.current);
        return modalStore.dispose
    }, []);

    return <div ref={popupRef} css={[modalStyles(modalStore.isOpened, modalStore.wasOpened), styles]}>
        <div css={modalContainerStyles}>
            <div css={headerStyles}>
                <CrossIcon css={crossStyles} onClick={modalStore.close}/>
                <h2 css={titleStyles}>
                    {title}
                </h2>
            </div>
            <div css={[modalContentStyles, contentStyles]}>
                {children}
            </div>
            <div css={footerStyles}>
                {footer}
            </div>
        </div>
    </div>
})