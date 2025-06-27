import {NavigateButton} from "../../../../shared/ui/navigate-button/navigate-button.tsx";
import TriangleIcon from "../../../../assets/images/triangle.svg?react";
import DiagonalArrowIcon from "../../../../assets/images/diagonal-arrow.svg?react";
import {ReviewPreview} from "./review-preview/review-preview.tsx";
import {useTranslation} from "react-i18next";
import {welcomeSectionVariants} from "./welcome-section-variants.ts";
import {
    animatedWrapperStyle,
    backgroundImageStyle, backgroundStyle,
    backgroundWrapperStyle,
    buttonRedStyle,
    buttonsStyle,
    buttonStyle,
    highlightStyle,
    iconStyle,
    iconWrapperStyle, imageColumnStyle, imageEvenColumnStyle,
    leftSectionStyle, pausedAnimatedWrapperStyle,
    reviewPreviewStyle,
    rightSectionStyle,
    sectionStyle,
    subTitleStyle,
    titleIconStyle,
    titleStyle, wrapperStyle
} from "./welcome-section.styles.ts";

import image1 from "./../../../../assets/images/banner-images/39717l.webp";
import image2 from "./../../../../assets/images/banner-images/76049l.webp";
import image3 from "./../../../../assets/images/banner-images/138100l.webp";
import image4 from "./../../../../assets/images/banner-images/138851l.webp";
import image5 from "./../../../../assets/images/banner-images/99013l.webp";
import image6 from "./../../../../assets/images/banner-images/92110l.webp";
import image7 from "./../../../../assets/images/banner-images/134443l.webp";
import image8 from "./../../../../assets/images/banner-images/109222l.webp";
import image9 from "./../../../../assets/images/banner-images/87048l.webp";
import image10 from "./../../../../assets/images/banner-images/143284l.webp";
import image11 from "./../../../../assets/images/banner-images/127974l.webp";
import image12 from "./../../../../assets/images/banner-images/128039l.webp";
import {useInjection} from "inversify-react";
import {AnimationsSwitchStore} from "../../../../features/animations-switch";
import {observer} from "mobx-react";

export const WelcomeSection = observer(() => {
    const {t} = useTranslation();
    const {title, subTitle, welcomeImage, welcomeTitleImage} = welcomeSectionVariants[0];
    const animationsSwitchStore = useInjection(AnimationsSwitchStore);

    return (
        <section css={sectionStyle}>
            <div css={backgroundWrapperStyle}>
                <div css={backgroundStyle}>
                    <div css={[wrapperStyle, animatedWrapperStyle, !animationsSwitchStore.isAnimationsEnabled && pausedAnimatedWrapperStyle]}>
                        <div css={[imageColumnStyle]}>
                            {[image1, image2, image3, image1, image2, image3,]
                                .map((image) => <img css={backgroundImageStyle} key={image} src={image} alt={"1"}/>
                                )}
                        </div>
                        <div css={[imageColumnStyle, imageEvenColumnStyle]}>
                            {[image4, image5, image6, image4, image5, image6]
                                .map((image) => <img css={backgroundImageStyle} key={image} src={image} alt={"1"}/>
                                )}
                        </div>
                        <div css={imageColumnStyle}>
                            {[image7, image8, image9, image7, image8, image9]
                                .map((image) => <img css={backgroundImageStyle} key={image} src={image} alt={"1"}/>
                                )}
                        </div>
                        <div css={[imageColumnStyle, imageEvenColumnStyle]}>
                            {[image10, image11, image12, image10, image11, image12]
                                .map((image) => <img css={backgroundImageStyle} key={image} src={image} alt={"1"}/>
                                )}
                        </div>
                    </div>

                </div>
            </div>

            <div css={leftSectionStyle}>
                <span css={titleStyle}>{title}<span css={highlightStyle}> EpicAnime</span></span>
                <span css={subTitleStyle}>{subTitle}</span>
                <div css={buttonsStyle}>
                    <NavigateButton styles={buttonStyle} title={t("Explore Now")} href="#" icon={<DiagonalArrowIcon/>}/>
                    <NavigateButton styles={[buttonStyle, buttonRedStyle]} title={t("Start Watching")} href="#"
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