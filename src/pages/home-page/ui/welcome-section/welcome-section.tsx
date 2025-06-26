import {NavigateButton} from "../../../../shared/ui/navigate-button/navigate-button.tsx";
import TriangleIcon from "../../../../assets/images/triangle.svg?react";
import DiagonalArrowIcon from "../../../../assets/images/diagonal-arrow.svg?react";
import {ReviewPreview} from "./review-preview/review-preview.tsx";
import {useTranslation} from "react-i18next";
import {welcomeSectionVariants} from "./welcome-section-variants.ts";
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
} from "./welcome-section.styles.ts";

export function WelcomeSection() {
    const {t} = useTranslation();
    const {title, subTitle, welcomeImage, welcomeTitleImage} = welcomeSectionVariants[0];

    return (
        <section css={sectionStyle}>
            <div css={leftSectionStyle}>
                <span css={titleStyle}>{title}<span css={highlightStyle}> EpicAnime</span></span>
                <span css={subTitleStyle}>{subTitle}</span>
                <div css={buttonsStyle}>
                    <NavigateButton styles={buttonStyle} title={t("Explore Now")} href="#" icon={<DiagonalArrowIcon/>}/>
                    <NavigateButton styles={[buttonStyle, buttonRedStyle]} title={t("Start Watching")} href="#"
                                    icon={<TriangleIcon/>}/>
                </div>
                <div css={reviewPreviewStyle}><ReviewPreview/></div>
            </div>
            <div css={rightSectionStyle}>
                <div css={iconWrapperStyle}><img css={iconStyle} src={welcomeImage} alt=""/></div>
                <img css={titleIconStyle} src={welcomeTitleImage} alt=""/>
            </div>
        </section>
    );
}