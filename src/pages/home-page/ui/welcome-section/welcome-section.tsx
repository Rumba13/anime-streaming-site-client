import {NavigateButton} from "../../../../shared/ui";
import TriangleIcon from "../../../../assets/images/triangle.svg?react";
import DiagonalArrowIcon from "../../../../assets/images/diagonal-arrow.svg?react";
import {ReviewPreview} from "./review-preview/review-preview";
import {useTranslation} from "react-i18next";
import {
    buttonRedStyle,
    buttonsStyle,
    buttonStyle,
    highlightStyle,
    iconStyle,
    iconWrapperStyle,
    leftSectionStyle,
    reviewPreviewStyle,
    rightSectionStyle,
    sectionStyle,
    subTitleStyle,
    titleIconStyle,
    titleStyle
} from "./welcome-section.styles";
import {observer} from "mobx-react";
import {WelcomeBackground} from "./welcome-background/welcome-background";
import {ROUTES} from "../../../../shared/lib";
import WelcomeIcon1 from "../../../../assets/images/welcome-1.png";
import WelcomeTitleIcon1 from "../../../../assets/images/welcome-title-1.png";
import {t} from "i18next";

export const WelcomeSection = observer(() => {
    const {t: tCommon} = useTranslation("common");

    return (
        <section css={sectionStyle}>
            <WelcomeBackground/>

            <div css={leftSectionStyle}>
                <span css={titleStyle}>{t("welcome_to")}<span css={highlightStyle}> EpicAnime</span></span>
                <span css={subTitleStyle}>{t("embark_on_a_journey_of_endless_stories_and_epic_adventures")}</span>
                <div css={buttonsStyle}>
                    <NavigateButton styles={buttonStyle} title={tCommon("explore_now")} href={ROUTES.SEARCH_PAGE}
                                    icon={<DiagonalArrowIcon/>}/>
                    <NavigateButton styles={[buttonStyle, buttonRedStyle]} title={tCommon("start_watching")} href="#"
                                    icon={<TriangleIcon/>}/>
                </div>
                <ReviewPreview styles={reviewPreviewStyle}/>
            </div>
            <div css={rightSectionStyle}>
                <div css={iconWrapperStyle}><img css={iconStyle} src={WelcomeIcon1} alt=""/></div>
                <img css={titleIconStyle} src={WelcomeTitleIcon1} alt=""/>
            </div>
        </section>
    );
})

