import {darkTheme} from "./dark-theme.ts";
import {ThemeType} from "../theme-type.ts";
import {Theme} from "../theme.ts";
import {lightTheme} from "./light-theme.ts";

export const themes: Record<ThemeType, Theme> = {
    dark: darkTheme,
    light: lightTheme
}