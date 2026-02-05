import {ArgsProps} from "antd/es/notification/interface";
import UserIcon from "../../../../../assets/images/user.svg?react"
import {t} from "i18next"

export const successfulSignUpNotificationConfig: ArgsProps = {
    message: t("successful_sign_up_message", {ns:"auth"}),
    description: t("Welcome to EpicAnime"),
    placement: "bottomRight",
    duration: 3.5,
    pauseOnHover: false,
    className: "notification",
    showProgress: true,
    icon: <UserIcon/>
}