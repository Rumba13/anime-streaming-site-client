import "./footer.scss";
import {QuickNavigation} from "../../../ui/quick-navigation";
import {ConnectWithUs} from "./connect-with-us/connect-with-us.tsx";
import {AboutUs} from "./about-us/about-us.tsx";
import {AccountActions} from "./account-actions/account-actions.tsx";
import {HorizontalLine} from "../../../ui/horizontal-line/horizontal-line.tsx";
import {ScrollToTopButton} from "./scroll-to-top-button/scroll-to-top-button.tsx";

export function Footer() {
    return <footer className="footer">

        <div className="footer__container">
            <QuickNavigation/>
            <ConnectWithUs/>
            <AboutUs/>
            <AccountActions/>
        </div>
        <ScrollToTopButton/>
        <HorizontalLine />
    </footer>
}