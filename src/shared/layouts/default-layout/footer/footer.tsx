import "./footer.scss";
import {QuickNavigation} from "../../../ui/quick-navigation";
import {SocialLinks} from "./connect-with-us/social-links.tsx";
import {CompanyInfo} from "./company-info/company-info.tsx";
import {SocialLinks} from "./social-links/social-links.tsx";
import {HorizontalLine} from "../../../ui/horizontal-line/horizontal-line.tsx";
import {ScrollToTopButton} from "./scroll-to-top-button/scroll-to-top-button.tsx";

export function Footer() {
    return <footer className="footer">

        <div className="footer__links">
            <QuickNavigation/>
            <SocialLinks/>
            <CompanyInfo/>
            <SocialLinks/>
        </div>
        <ScrollToTopButton/>
        <HorizontalLine/>
        <div className="footer__bottom">
            <p className="footer__copyright">© 2025 Epic Anime. All Rights Reserved</p>
            {/*<LanguageSelector/>*/}
        </div>
    </footer>
}