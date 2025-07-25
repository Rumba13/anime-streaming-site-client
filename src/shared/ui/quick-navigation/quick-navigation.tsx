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
    const {t} = useTranslation();

    return <div css={[quickNavigation, style]}>
        <span css={[quickNavigationTitle, titleStyle]}>{title || t('Quick Navigation')}</span>
        <ul css={[quickNavigationList, listStyle]}>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="1">{t('Browse Popular')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="2">{t('Browse News')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="3">{t('Interviews')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="4">{t('Guides')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]} link="5">{t('Announcements')}</ListItem>
            <ListItem styles={[quickNavigationItem, listItemStyle]}
                      link={ROUTES.TRAILERS_PAGE}>{t('Trailers')}</ListItem>
        </ul>
    </div>
}