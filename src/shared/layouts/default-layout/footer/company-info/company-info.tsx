import "./company-info.styles";
import {ListItem} from "../../../../ui";
import {useTranslation} from "react-i18next";
import {aboutUsItemStyles, aboutUsListStyles, aboutUsTitleStyles} from "./company-info.styles";

export function CompanyInfo() {
    const {t:tNavigation} = useTranslation("navigation")

    return <div className="about-us">
        <span css={aboutUsTitleStyles}>叙 Epic Anime</span>
        <ul css={aboutUsListStyles}>
            <ListItem styles={aboutUsItemStyles} link="1">{tNavigation("about_us")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="2">{tNavigation("contact")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="3">{tNavigation("faq")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="4">{tNavigation("terms_and_conditions")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="5">{tNavigation("privacy_policy")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="6">{tNavigation("help")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="7">{tNavigation("support")}</ListItem>
        </ul>
    </div>
}