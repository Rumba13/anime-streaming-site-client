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
        <span css={[quickNavigationTitle, titleStyle]}>{title || tNavigation('Quick Navigation')}</span>
        <ul css={[quickNavigationList, listStyle]}>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="1">{tNavigation('Browse Popular')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="2">{tNavigation('Browse News')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="3">{tNavigation('Interviews')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="4">{tNavigation('Guides')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="5">{tNavigation('Announcements')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]}
                      link={ROUTES.TRAILERS_PAGE}>{tNavigation('navigation_trailers')}</ListItem>
        </ul>
    </div>
}