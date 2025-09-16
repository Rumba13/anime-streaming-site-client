import {ConfirmModalConfig} from "../../../../shared/types/confirm-modal-config.ts";
import {useTranslation} from "react-i18next";
import {useInjection} from "inversify-react";
import {ConfirmModalStore} from "../../../../shared/model/confirm-modal.store.ts";
import React from "react";
import {signOut} from "../api/sign-out.ts";
import {notification} from "antd";

export const SignOutButton = () => {
    const {t} = useTranslation()
    const [api, contextHolder] = notification.useNotification()
    const confirmModalStore = useInjection(ConfirmModalStore)

    const confirmSignOutModalConfig: ConfirmModalConfig = {
        title: t("Confirm logout"),
        confirmTitle: t("Log out"),
        description: t("Are you sure you want to sign out?")
    }

    const showSuccessfulSignOutNotification = () => api.open({
        message: t("You have logged out"),
        description: "",
        placement: "bottomRight",
        duration: 3.5,
        pauseOnHover: false,
        className: "notification",
        showProgress: true,
    });
    
    const askForSignOut = (event: React.MouseEvent) => {
        void confirmModalStore.askForConfirm(confirmSignOutModalConfig, event)
            .then(signOut)
            .then(showSuccessfulSignOutNotification)
    }

    return <button onClick={askForSignOut}>
        {contextHolder}
        Sign out
    </button>
}