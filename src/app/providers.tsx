import {container} from "./container.ts";
import {ThemeProvider} from "./theme/theme-provider.tsx";
import {AntdThemeProvider} from "./theme/antd-theme-provider.tsx";
import {Provider} from "inversify-react";
import {ReactNode} from "react";
import {ThemeStore} from "./theme/theme.store.ts";

type PropsType = {
    children: ReactNode,
}

export const Providers = ({children}:PropsType) => {
    const themeStore = container.get(ThemeStore);

    return <Provider container={container} key={container.id}>
        <ThemeProvider>
            <AntdThemeProvider theme={themeStore.getCurrentTheme()}>
                {children}
            </AntdThemeProvider>
        </ThemeProvider>
    </Provider>
}