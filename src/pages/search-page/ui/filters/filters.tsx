import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    styles?: Interpolation<Theme>
}

export const Filters = ({styles}: PropsType) => {
    return <div css={[styles]}>
        filters
    </div>
}