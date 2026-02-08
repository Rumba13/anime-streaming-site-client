import {ArgsProps} from "antd/es/notification/interface";
import {t} from "i18next"

export const unknownErrorNotificationConfig: ArgsProps = {
    message: t("an_unknown_error_has_occurred", {ns:"errors"}),
    description: "",
    placement: "bottomRight",
    duration: 3.5,
    pauseOnHover: false,
    className: "notification",
    showProgress: true,
    type: "error"
}