import "./scroll-to-top-button.styles.ts";
import {GradientBorderedButton} from "../../../../ui";
import ArrowIcon from "../../../../../assets/images/narrow-arrow.svg?react"
import {scrollToTopButton} from "./scroll-to-top-button.styles.ts";

export function ScrollToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return <GradientBorderedButton styles={scrollToTopButton} onClick={scrollToTop} >
        <ArrowIcon/>
    </GradientBorderedButton>
}