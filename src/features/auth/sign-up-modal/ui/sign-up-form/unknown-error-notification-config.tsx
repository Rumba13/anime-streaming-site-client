import {ArgsProps} from "antd/es/notification/interface";
import {t} from "i18next"

export const unknownErrorNotificationConfig: ArgsProps = {
    message: t("An unknown error has occurred", {ns:"errors"}),
    description: "",
    placement: "bottomRight",
    duration: 3.5,
    pauseOnHover: false,
    className: "notification",
    showProgress: true,
    type: "error"
}