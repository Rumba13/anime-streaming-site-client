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

export const ConfirmModal = observer(() => {
    const confirmModalStore = useInjection(ConfirmModalStore)

    return <BaseModal styles={confirmModalStyles} contentStyles={contentStyles}
                      modalStore={confirmModalStore.baseModalStore}
                      title={confirmModalStore.confirmModalConfig?.title}>
        {confirmModalStore.confirmModalConfig?.description}
        <div css={buttonContainerStyles}>
            <button css={confirmButtonStyles} onClick={confirmModalStore.confirm}>
                {confirmModalStore.confirmModalConfig?.confirmTitle || "Confirm"}
            </button>
            <button css={cancelButtonStyles} onClick={confirmModalStore.cancel}>{confirmModalStore.confirmModalConfig?.cancelTitle ||"Cancel"}</button>
        </div>
    </BaseModal>
})