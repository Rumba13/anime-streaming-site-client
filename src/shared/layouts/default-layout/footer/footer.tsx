import "./footer.styles.ts";
import {QuickNavigation} from "../../../ui/quick-navigation";
import {SocialLinks} from "./social-links/social-links.tsx";
import {CompanyInfo} from "./company-info/company-info.tsx";
import {AccountActions} from "./account-actions/account-actions.tsx";
import {HorizontalLine} from "../../../ui/horizontal-line/horizontal-line.tsx";
import {ScrollToTopButton} from "./scroll-to-top-button/scroll-to-top-button.tsx";
import {FC} from "react";
import {
    footerBottomStyles,
    footerCopyrightStyles,
    footerLinksStyles,
    footerStyles,
    horizontalLineStyles, quickNavigationItemStyles, quickNavigationTitleStyles
} from "./footer.styles.ts";

type PropsType = {
    LanguageSelectorSlot: FC
}

export function Footer({LanguageSelectorSlot}: PropsType) {
    return <footer css={footerStyles}>
        <div css={footerLinksStyles}>
            <QuickNavigation listItemStyle={quickNavigationItemStyles} titleStyle={quickNavigationTitleStyles}/>
            <SocialLinks/>
            <CompanyInfo/>
            <AccountActions/>
        </div>
        <ScrollToTopButton/>
        <HorizontalLine styles={horizontalLineStyles}/>
        <div css={footerBottomStyles}>
            <p css={footerCopyrightStyles}>© 2025 Epic Anime. All Rights Reserved</p>
            <LanguageSelectorSlot/>
        </div>
    </footer>
}