import {NavigateButton} from "../../../../shared/ui";
import TriangleIcon from "../../../../assets/images/triangle.svg?react";
import DiagonalArrowIcon from "../../../../assets/images/diagonal-arrow.svg?react";
import {ReviewPreview} from "./review-preview/review-preview";
import {useTranslation} from "react-i18next";
import {welcomeSectionVariants} from "./welcome-section-variants";
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

export const WelcomeSection = observer(() => {
    const {t:tCommon} = useTranslation("common");
    const {title, subTitle, welcomeImage, welcomeTitleImage} = welcomeSectionVariants[0];

    return (
        <section css={sectionStyle}>
            <WelcomeBackground/>

            <div css={leftSectionStyle}>
                <span css={titleStyle}>{title}<span css={highlightStyle}> EpicAnime</span></span>
                <span css={subTitleStyle}>{subTitle}</span>
                <div css={buttonsStyle}>
                    <NavigateButton styles={buttonStyle} title={tCommon("explore_now")} href={ROUTES.SEARCH_PAGE} icon={<DiagonalArrowIcon/>}/>
                    <NavigateButton styles={[buttonStyle, buttonRedStyle]} title={tCommon("start_watching")} href="#"
                                    icon={<TriangleIcon/>}/>
                </div>
                <ReviewPreview styles={reviewPreviewStyle}/>
            </div>
            <div css={rightSectionStyle}>
                <div css={iconWrapperStyle}><img css={iconStyle} src={welcomeImage} alt=""/></div>
                <img css={titleIconStyle} src={welcomeTitleImage} alt=""/>
            </div>
        </section>
    );
})

