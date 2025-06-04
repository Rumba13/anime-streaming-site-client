import "./social-links.scss";
import {SocialLinksItem} from "./social-links-item/social-links-item.tsx";
import FacebookIcon from "../../../../../assets/images/facebook.svg?react"
import TwitterLogo from "../../../../../assets/images/twitter.svg?react"
import InstagramLogo from "../../../../../assets/images/instagram.svg?react"
import YoutubeLogo from "../../../../../assets/images/youtube.svg?react"
import {useTranslation} from "react-i18next";

export function SocialLinks() {
    const {t} = useTranslation()

    return <div className="connect-with-us">
        <span className="connect-with-us__title">{t("Connect with us")}</span>
        <ul className="connect-with-us__list">
            <SocialLinksItem icon={<FacebookIcon/>} title={t("Facebook")} link="1"/>
            <SocialLinksItem icon={<TwitterLogo/>} title={t("X App")} link="1"/>
            <SocialLinksItem icon={<YoutubeLogo/>} title={t("Youtube")} link="1"/>
            <SocialLinksItem icon={<InstagramLogo/>} title={t("Instagram")} link="1"/>
        </ul>
    </div>
}