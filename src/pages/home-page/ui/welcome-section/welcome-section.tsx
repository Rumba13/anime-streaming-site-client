import "./welcome-section.scss";
import {NavigateButton} from "../../../../shared/ui/navigate-button/navigate-button.tsx";
import TriangleIcon from "../../../../assets/images/triangle.svg?react"
import DiagonalArrowIcon from "../../../../assets/images/diagonal-arrow.svg?react"
import {ReviewPreview} from "./review-preview/review-preview.tsx";
import {useTranslation} from "react-i18next";
import { welcomeSectionVariants} from "./welcome-section-variants.ts";

export function WelcomeSection() {
    const {t} = useTranslation();
    const welcomeVariant = welcomeSectionVariants[0];

    return <section className="welcome-section">
        <div className="welcome-section__left">
            <span className="welcome-section__title">{welcomeVariant.title}
                <span className="welcome-section__highlight"> EpicAnime</span>
            </span>
            <span className="welcome-section__sub-title">
                {welcomeVariant.subTitle}
            </span>
            <div className="welcome-section__buttons">
                <NavigateButton className="welcome-section__button" title={t("Explore Now")} href="#"
                                icon={<DiagonalArrowIcon/>}/>
                <NavigateButton className="welcome-section__button--red" title={t("Start Watching")} href="#"
                                icon={<TriangleIcon/>}/>
            </div>
            <ReviewPreview/>
        </div>
        <div className="welcome-section__right">
            <div className="welcome-section__welcome-icon-wrapper">
                <img className="welcome-section__welcome-icon" src={welcomeVariant.welcomeImage} alt=""/>
            </div>
            <img className="welcome-section__welcome-title-icon" src={welcomeVariant.welcomeTitleImage} alt=""/>
        </div>
    </section>
}
