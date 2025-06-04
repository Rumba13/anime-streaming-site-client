import "./company-info.scss";
import {ListItem} from "../../../../ui/list-item/list-item.tsx";
import {useTranslation} from "react-i18next";

export function CompanyInfo() {
    const {t} = useTranslation()

    return <div className="about-us">
        <span className="about-us__title">叙 Epic Anime</span>
        <ul className="about-us__list">
            <ListItem className="about-us__item" link="1">{t("About Us")}</ListItem>
            <ListItem className="about-us__item" link="2">{t("Contact")}</ListItem>
            <ListItem className="about-us__item" link="3">{t("FAQ")}</ListItem>
            <ListItem className="about-us__item" link="4">{t("Terms & Conditions")}</ListItem>
            <ListItem className="about-us__item" link="5">{t("Privacy Policy")}</ListItem>
            <ListItem className="about-us__item" link="6">{t("Help")}</ListItem>
            <ListItem className="about-us__item" link="7">{t("Support")}</ListItem>
        </ul>
    </div>
}