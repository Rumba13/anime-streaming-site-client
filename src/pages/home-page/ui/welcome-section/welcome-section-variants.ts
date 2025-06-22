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
        title: t("Welcome to"),
        subTitle: t("Embark on a Journey of Endless Stories and Epic Adventures.")
    },
    {
        welcomeImage: WelcomeIcon2,
        welcomeTitleImage: WelcomeTitleIcon2,
        title: t("Welcome to"),
        subTitle: t("Embark on a Journey of Endless Stories and Epic Adventures.")
    },
    {
        welcomeImage: WelcomeIcon3,
        welcomeTitleImage: WelcomeTitleIcon3,
        title: t("Welcome to"),
        subTitle: t("Embark on a Journey of Endless Stories and Epic Adventures.")
    }
]
