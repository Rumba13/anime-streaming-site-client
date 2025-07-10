import { exploreMoreSectionStyle, exploreMoreSectionImage, exploreMoreSectionTitle, exploreMoreSectionButton } from "./explore-more-section.styles.ts";
import ExploreMoreImage from "../../../../assets/images/explore-more.png";
import {NavigateButton} from "../../../../shared/ui/navigate-button/navigate-button.tsx";
import {useTranslation} from "react-i18next";
import DiagonalArrowIcon from "../../../../assets/images/diagonal-arrow.svg?react"
import {Interpolation, Theme} from "@emotion/react";
import {ROUTES} from "../../../../shared/lib/routes.ts";

type PropsType = {
    styles?: Interpolation<Theme>
}

export function ExploreMoreSection({styles}:PropsType) {
    const {t} = useTranslation();

    return <section css={[exploreMoreSectionStyle, styles]}>
        <img css={exploreMoreSectionImage} src={ExploreMoreImage} alt={"ExploreMoreImage"}/>
        <h2 css={exploreMoreSectionTitle}>{t("Wondering What's Beyond?")}</h2>
        <NavigateButton styles={exploreMoreSectionButton} title={t("Explore Now")}
                        href={ROUTES.SEARCH_PAGE} icon={<DiagonalArrowIcon/>}/>
    </section>
}

