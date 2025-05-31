import "./scroll-to-top-button.scss";
import {GradientBorderedButton} from "../../../../ui";
import ArrowIcon from "../../../../../assets/images/narrow-arrow.svg?react"

export function ScrollToTopButton() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth' // This enables smooth scrolling
        });
    }

    return <GradientBorderedButton className="scroll-to-top-button" onClick={scrollToTop} >
        <ArrowIcon/>
    </GradientBorderedButton>
}