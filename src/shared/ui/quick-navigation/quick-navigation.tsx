import "./quick-navigation.styles";
import {ROUTES} from "../../lib";
import {ListItem} from "../list-item";
import {useTranslation} from "react-i18next";
import {
    quickNavigation,
    quickNavigationItem,
    quickNavigationList,
    quickNavigationTitle
} from "./quick-navigation.styles";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    title?: string,
    style?: Interpolation<Theme>,
    titleStyle?: Interpolation<Theme>,
    listStyle?: Interpolation<Theme>,
    listItemStyle?: Interpolation<Theme>,
}

export function QuickNavigation({title, style, titleStyle, listStyle, listItemStyle}: PropsType) {
    const {t:tNavigation} = useTranslation("navigation");

    return <div css={[quickNavigation, style]}>
        <span css={[quickNavigationTitle, titleStyle]}>{title || tNavigation('quick_navigation')}</span>
        <ul css={[quickNavigationList, listStyle]}>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="1">{tNavigation('browse_popular')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="2">{tNavigation('browse_news')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="3">{tNavigation('interviews')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="4">{tNavigation('guides')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="5">{tNavigation('announcements')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]}
                      link={ROUTES.TRAILERS_PAGE}>{tNavigation('navigation_trailers')}</ListItem>
        </ul>
    </div>
}