import {observer} from "mobx-react";
import {container} from "../container";
import {ThemeStore} from "./theme.store";
import {themes} from "./themes/themes";
import {ThemeProvider as EmotionalThemeProvider} from "@emotion/react"

export const ThemeProvider = observer(({children}: { children: React.ReactNode }) => {
    const themeStore = container.get(ThemeStore);
    const currentTheme = themes[themeStore.currentThemeType]

    return <EmotionalThemeProvider theme={currentTheme}>{children}</EmotionalThemeProvider>;
});