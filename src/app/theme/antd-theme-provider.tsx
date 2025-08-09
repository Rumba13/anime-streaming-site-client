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
                Select: {},
                RangePicker: {},
                Notification: {
                    // zIndexPopup: 1050,       // z-index of notification container
                    // width: 400,              // notification width
                    padding: 0,            // padding of notification box
                    // marginBlockEnd: 24,     // margin between notifications
                    // borderRadius: 8,        // border radius
                    // boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08)', // box shadow
                    // colorBgElevated: '#ffffff', // background color
                    // colorText: 'rgba(0, 0, 0, 0.85)', // text color
                    // fontSize: 14,           // font size
                    // lineHeight: 1.5715,     // line height
                    margin: 0,
                    fontFamily: theme.thirdFontFamily,
                    colorPrimary: theme.primaryColor,
                    colorBgBase: theme.backgroundColor,
                    borderRadius: theme.smallBorderRadius,
                    colorBgElevated: theme.backgroundColor,
                }
            }
        }}
    >
        {children}
    </ConfigProvider>
}