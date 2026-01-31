import {ConfirmModalConfig} from "../../../../shared/types/confirm-modal-config.ts";
import {useTranslation} from "react-i18next";
import {useInjection} from "inversify-react";
import {ConfirmModalStore} from "../../../../shared/model/confirm-modal.store.ts";
import React from "react";
import {signOut} from "../api/sign-out.ts";
import {notification} from "antd";

export const SignOutButton = () => {
    const {t:tAuth} = useTranslation("auth")
    const [api, contextHolder] = notification.useNotification()
    const confirmModalStore = useInjection(ConfirmModalStore)

    const confirmSignOutModalConfig: ConfirmModalConfig = {
        title: tAuth("Confirm logout"),
        confirmTitle: tAuth("Log out"),
        description: tAuth("Are you sure you want to sign out?")
    }

    const showSuccessfulSignOutNotification = () => api.open({
        message: tAuth("You have logged out"),
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
        {tAuth("Sign Out")}
    </button>
}