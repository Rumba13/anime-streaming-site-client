import LoadingGif from "@src/assets/images/loading.gif"
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    styles?:Interpolation<Theme>
}

export function Loading({styles}:PropsType) {
    return <div css={styles}>
        <img src={LoadingGif} alt=""/>
    </div>
}