import WelcomeIcon1 from "../../../../assets/images/welcome-1.png";
import WelcomeTitleIcon1 from "../../../../assets/images/welcome-title-1.png";
import {t} from "i18next";
import WelcomeIcon2 from "../../../../assets/images/welcome-2.png";
import WelcomeTitleIcon2 from "../../../../assets/images/welcome-title-2.svg";
import WelcomeIcon3 from "../../../../assets/images/welcome-3.png";
import WelcomeTitleIcon3 from "../../../../assets/images/welcome-title-3.png";

export type WelcomeSectionVariant = {
    welcomeImage:string,
    welcomeTitleImage:string,
    title:string,
    subTitle:string,
}

export const welcomeSectionVariants: WelcomeSectionVariant[] = [
    {
        welcomeImage: WelcomeIcon1,
        welcomeTitleImage: WelcomeTitleIcon1,
        title: t("welcome_to"),
        subTitle: t("embark_on_a_journey_of_endless_stories_and_epic_adventures")
    },
    {
        welcomeImage: WelcomeIcon2,
        welcomeTitleImage: WelcomeTitleIcon2,
        title: t("welcome_to"),
        subTitle: t("embark_on_a_journey_of_endless_stories_and_epic_adventures")
    },
    {
        welcomeImage: WelcomeIcon3,
        welcomeTitleImage: WelcomeTitleIcon3,
        title: t("welcome_to"),
        subTitle: t("embark_on_a_journey_of_endless_stories_and_epic_adventures")
    }
]
