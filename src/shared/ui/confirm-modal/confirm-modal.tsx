import {BaseModal} from "../base-modal";
import {useInjection} from "inversify-react";
import {ConfirmModalStore} from "../../model/confirm-modal.store.ts";
import {observer} from "mobx-react";
import {
    buttonContainerStyles,
    cancelButtonStyles,
    confirmButtonStyles,
    confirmModalStyles,
    contentStyles
} from "./confirm-modal.styles.ts";
import {useTranslation} from "react-i18next";

export const ConfirmModal = observer(() => {
    const confirmModalStore = useInjection(ConfirmModalStore)
    const {t:tCommon} = useTranslation("common")

    return <BaseModal styles={confirmModalStyles} contentStyles={contentStyles}
                      modalStore={confirmModalStore.baseModalStore}
                      title={confirmModalStore.confirmModalConfig?.title}>
        {confirmModalStore.confirmModalConfig?.description}
        <div css={buttonContainerStyles}>
            <button css={confirmButtonStyles} onClick={confirmModalStore.confirm}>
                {confirmModalStore.confirmModalConfig?.confirmTitle || tCommon("confirm")}
            </button>
            <button css={cancelButtonStyles} onClick={confirmModalStore.cancel}>{confirmModalStore.confirmModalConfig?.cancelTitle || tCommon("cancel")}</button>
        </div>
    </BaseModal>
})