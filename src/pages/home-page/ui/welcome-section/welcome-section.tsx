import "./welcome-section.scss";
import WelcomeIcon from "../../../../assets/images/welcome.png"
import WelcomeTitleIcon from "../../../../assets/images/welcome-title.png"
import {NavigateButton} from "../../../../shared/ui/navigate-button/navigate-button.tsx";
import TriangleIcon from "../../../../assets/images/triangle.svg?react"
import DiagonalArrowIcon from "../../../../assets/images/diagonal-arrow.svg?react"

export function WelcomeSection() {
    return <section className="welcome-section">
        <div className="welcome-section__left">
            <span className="welcome-section__title">Welcome to
                <span className="welcome-section__highlight"> EpicAnime</span>
            </span>
            <span className="welcome-section__sub-title">
                Embark on a Journey of Endless Stories and Epic Adventures.
            </span>
            <div className="welcome-section__buttons">
                <NavigateButton className="welcome-section__button" title="Explore Now" href="#"
                                icon={<DiagonalArrowIcon/>}/>
                <NavigateButton className="welcome-section__button--red" title="Start Watching" href="#"
                                icon={<TriangleIcon/>}/>
            </div>
        </div>
        <div className="welcome-section__right">
            <img className="welcome-section__welcome-icon" src={WelcomeIcon} alt=""/>
            <img className="welcome-section__welcome-title-icon" src={WelcomeTitleIcon} alt=""/>
        </div>
    </section>
}