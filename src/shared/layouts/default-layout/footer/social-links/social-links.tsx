import "./social-links.styles";
import {SocialLinksItem} from "./social-links-item/social-links-item";
import FacebookIcon from "../../../../../assets/images/facebook.svg?react"
import TwitterLogo from "../../../../../assets/images/twitter.svg?react"
import InstagramLogo from "../../../../../assets/images/instagram.svg?react"
import YoutubeLogo from "../../../../../assets/images/youtube.svg?react"
import {useTranslation} from "react-i18next";
import {socialLinksTitle, socialLinksList} from "./social-links.styles";

export function SocialLinks() {
    const {t} = useTranslation()

    return <div>
        <span css={socialLinksTitle}>{t("Connect with us")}</span>
        <ul css={socialLinksList}>
            <SocialLinksItem icon={<FacebookIcon/>} title={t("Facebook")} link="1"/>
            <SocialLinksItem icon={<TwitterLogo/>} title={t("X App")} link="1"/>
            <SocialLinksItem icon={<YoutubeLogo/>} title={t("Youtube")} link="1"/>
            <SocialLinksItem icon={<InstagramLogo/>} title={t("Instagram")} link="1"/>
        </ul>
    </div>
}