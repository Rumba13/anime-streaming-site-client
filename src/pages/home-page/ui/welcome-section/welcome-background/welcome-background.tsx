import {
    animatedWrapperStyle, backgroundImageStyle, backgroundImageVisibleStyle,
    backgroundStyle,
    backgroundWrapperStyle,
    backgroundWrapperVisibleStyle, imageColumnStyle, imageEvenColumnStyle, pausedAnimatedWrapperStyle,
    wrapperStyle
} from "./welcome-background.styles";
import {useInjection} from "inversify-react";
import {AnimationsSwitchStore} from "../../../../../features/animations-switch";
import {WelcomeBannersStore} from "../welcome-banners.store";
import {useEffect, useState} from "react";
import {observer} from "mobx-react";

type BannerColumn = {
    images: string[],
    delay: string,
    isBannersShown: boolean
}

const BannerColumn = observer(({images, delay, isBannersShown}: BannerColumn) => {
    return <>
        {[...images, ...images]
            .map((image, index) => <img
                css={[backgroundImageStyle, isBannersShown && backgroundImageVisibleStyle(delay)]}
                src={image}
                key={`${image}-${index}`}
                alt="Anime Banner Image"
            />)}
    </>
})

export const WelcomeBackground = observer(() => {
    const animationsSwitchStore = useInjection(AnimationsSwitchStore);
    const welcomeBannersStore = useInjection(WelcomeBannersStore);
    const [isBannersShown, setIsBannersShown] = useState<boolean>(false)

    useEffect(() => {
        void welcomeBannersStore.loadBanners().then(() => {
            setTimeout(() => setIsBannersShown(true), 100)
        });
    }, []);

    const columns = [
        {images: welcomeBannersStore.banners.slice(0, 3), delay: 0},
        {images: welcomeBannersStore.banners.slice(3, 6), delay: 400},
        {images: welcomeBannersStore.banners.slice(6, 9), delay: 800},
        {images: welcomeBannersStore.banners.slice(9, 12), delay: 1200},
    ]

    return <div css={[backgroundWrapperStyle, welcomeBannersStore.isLoaded() && backgroundWrapperVisibleStyle]}>
        <div css={backgroundStyle}>
            <div
                css={[wrapperStyle, animatedWrapperStyle, !animationsSwitchStore.isAnimationsEnabled && pausedAnimatedWrapperStyle]}>
                {columns.map(({images, delay}, index) => <div
                    key={delay}
                    css={[imageColumnStyle, index % 2 === 0 && imageEvenColumnStyle]}>
                    <BannerColumn delay={`${delay}ms`} isBannersShown={isBannersShown} images={images}/>
                </div>)}
            </div>
        </div>
    </div>
})