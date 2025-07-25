import "./footer.styles";
import {QuickNavigation} from "../../../ui";
import {SocialLinks} from "./social-links/social-links";
import {CompanyInfo} from "./company-info/company-info";
import {AccountActions} from "./account-actions/account-actions";
import {HorizontalLine} from "../../../ui";
import {ScrollToTopButton} from "./scroll-to-top-button/scroll-to-top-button";
import {FC} from "react";
import {
    footerBottomStyles,
    footerCopyrightStyles,
    footerLinksStyles,
    footerStyles,
    horizontalLineStyles, quickNavigationItemStyles, quickNavigationTitleStyles
} from "./footer.styles";

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