import {container} from "./container";
import {ThemeProvider} from "./theme/theme-provider";
import {AntdThemeProvider} from "./theme/antd-theme-provider";
import {Provider} from "inversify-react";
import {ReactNode, useEffect} from "react";
import {ThemeStore} from "./theme/theme.store";
import {UserStore} from "../entities/user";
import {auth} from "../shared/api/firebase.ts";

type PropsType = {
    children: ReactNode,
}

export const Providers = ({children}:PropsType) => {
    const themeStore = container.get(ThemeStore);
    const userStore = container.get(UserStore);

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            userStore.setUser(user);
        });
    }, []);

    return <Provider container={container} key={container.id}>

        <ThemeProvider>
            <AntdThemeProvider theme={themeStore.getCurrentTheme()}>
                {children}
            </AntdThemeProvider>
        </ThemeProvider>
    </Provider>
}