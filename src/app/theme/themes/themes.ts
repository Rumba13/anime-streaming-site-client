import {darkTheme} from "./dark-theme";
import {ThemeType} from "../theme-type";
import {Theme} from "../theme";
import {lightTheme} from "./light-theme";

export const themes: Record<ThemeType, Theme> = {
    dark: darkTheme,
    light: lightTheme
}