import "./company-info.styles";
import {ListItem} from "../../../../ui";
import {useTranslation} from "react-i18next";
import {aboutUsItemStyles, aboutUsListStyles, aboutUsTitleStyles} from "./company-info.styles";

export function CompanyInfo() {
    const {t:tNavigation} = useTranslation("navigation")

    return <div className="about-us">
        <span css={aboutUsTitleStyles}>叙 Epic Anime</span>
        <ul css={aboutUsListStyles}>
            <ListItem styles={aboutUsItemStyles} link="1">{tNavigation("About Us")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="2">{tNavigation("Contact")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="3">{tNavigation("FAQ")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="4">{tNavigation("Terms & Conditions")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="5">{tNavigation("Privacy Policy")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="6">{tNavigation("Help")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="7">{tNavigation("Support")}</ListItem>
        </ul>
    </div>
}