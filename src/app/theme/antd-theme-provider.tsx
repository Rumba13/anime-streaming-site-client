import {Theme} from "@emotion/react";
import {ConfigProvider, theme as antdTheme} from "antd";
import {ReactNode} from "react";

type PropsType = {
    theme: Theme,
    children: ReactNode,
}

export const AntdThemeProvider = ({theme, children}: PropsType) => {
    return <ConfigProvider
        theme={{
            algorithm: antdTheme.darkAlgorithm,
            token: {
                colorPrimary: theme.primaryColor,
                motionDurationMid: theme.fastAnimationTime,
                motionDurationSlow: theme.mediumAnimationTime,
            },
            components: {
                Slider: {
                    trackBg: theme.primaryColor,
                    trackHoverBg: theme.primaryColor,
                    handleColor: theme.primaryColor,
                    handleActiveColor: theme.primaryColor,
                    dotActiveBorderColor: theme.primaryColor,
                    handleActiveOutlineColor: theme.primaryColor,
                    handleColorDisabled: theme.primaryColor,
                    handleLineWidth: "3px",
                    handleLineWidthHover: "3px",
                    handleSize: 11,
                    handleSizeHover: 11,
                },
                Select: {

                },
                RangePicker: {

                }
            }
        }}
    >
        {children}
    </ConfigProvider>
}