import "./explore-more-section.scss";
import ExploreMoreImage from "../../../../assets/images/explore-more.png";
import {NavigateButton} from "../../../../shared/ui/navigate-button/navigate-button.tsx";
import {useTranslation} from "react-i18next";
import DiagonalArrowIcon from "../../../../assets/images/diagonal-arrow.svg?react"


export function ExploreMoreSection() {
    const {t} = useTranslation();

    return <section className="explore-more-section">
        <img className="explore-more-section__image" src={ExploreMoreImage} alt={"ExploreMoreImage"}/>
        <h2 className="explore-more-section__title">{t("Wondering What's Beyond?")}</h2>
        <NavigateButton className="welcome-section__button" title={t("Explore Now")} href="#"
                        icon={<DiagonalArrowIcon/>}/>
    </section>
}

