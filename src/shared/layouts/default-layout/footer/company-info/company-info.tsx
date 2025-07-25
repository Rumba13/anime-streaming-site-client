import "./company-info.styles";
import {ListItem} from "../../../../ui";
import {useTranslation} from "react-i18next";
import {aboutUsItemStyles, aboutUsListStyles, aboutUsTitleStyles} from "./company-info.styles";

export function CompanyInfo() {
    const {t} = useTranslation()

    return <div className="about-us">
        <span css={aboutUsTitleStyles}>叙 Epic Anime</span>
        <ul css={aboutUsListStyles}>
            <ListItem styles={aboutUsItemStyles} link="1">{t("About Us")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="2">{t("Contact")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="3">{t("FAQ")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="4">{t("Terms & Conditions")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="5">{t("Privacy Policy")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="6">{t("Help")}</ListItem>
            <ListItem styles={aboutUsItemStyles} link="7">{t("Support")}</ListItem>
        </ul>
    </div>
}