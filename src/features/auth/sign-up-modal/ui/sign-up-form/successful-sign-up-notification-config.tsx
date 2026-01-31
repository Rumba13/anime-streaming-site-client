import {ArgsProps} from "antd/es/notification/interface";
import UserIcon from "../../../../../assets/images/user.svg?react"
import {t} from "i18next"

export const successfulSignUpNotificationConfig: ArgsProps = {
    message: t("Successful Registration Message", {ns:"auth"}),
    description: t("Welcome to EpicAnime"),
    placement: "bottomRight",
    duration: 3.5,
    pauseOnHover: false,
    className: "notification",
    showProgress: true,
    icon: <UserIcon/>
}