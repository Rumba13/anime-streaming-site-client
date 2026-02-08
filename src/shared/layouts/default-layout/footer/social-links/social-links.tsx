import "./social-links.styles";
import {SocialLinksItem} from "./social-links-item/social-links-item";
import FacebookIcon from "../../../../../assets/images/facebook.svg?react"
import TwitterLogo from "../../../../../assets/images/twitter.svg?react"
import InstagramLogo from "../../../../../assets/images/instagram.svg?react"
import YoutubeLogo from "../../../../../assets/images/youtube.svg?react"
import {useTranslation} from "react-i18next";
import {socialLinksTitle, socialLinksList} from "./social-links.styles";

export function SocialLinks() {
    const {t:tNavigation} = useTranslation("navigation")
    const {t:tCommon} = useTranslation("common")

    return <div>
        <span css={socialLinksTitle}>{tNavigation("connect_with_us")}</span>
        <ul css={socialLinksList}>
            <SocialLinksItem icon={<FacebookIcon/>} title={tCommon("social_facebook")} link="1"/>
            <SocialLinksItem icon={<TwitterLogo/>} title={tCommon("social_twitter")} link="1"/>
            <SocialLinksItem icon={<YoutubeLogo/>} title={tCommon("social_youtube")} link="1"/>
            <SocialLinksItem icon={<InstagramLogo/>} title={tCommon("social_instagram")} link="1"/>
        </ul>
    </div>
}