import {useInjection} from "inversify-react";
import {AnimeCardSwitchStore} from "../model/anime-card-switch.store.ts";
import MiniAnimeCardIcon from "../../../assets/images/grid-layout.svg?react";
import HorizontalAnimeCardIcon from "../../../assets/images/flex-layout.svg?react";
import {animeCardSwitcherStyles, buttonStyles} from "./anime-card-switcher.styles.ts";
import {observer} from "mobx-react";

export const AnimeCardSwitcher = observer(() => {
    const animeCardSwitchStore = useInjection(AnimeCardSwitchStore);

    return <div css={animeCardSwitcherStyles}>
        <button css={buttonStyles(animeCardSwitchStore.currentAnimeCardType === "Mini")}
                onClick={() => animeCardSwitchStore.setCurrentAnimeCardType("Mini")}>
            <MiniAnimeCardIcon/>
        </button>
        <button css={buttonStyles(animeCardSwitchStore.currentAnimeCardType === "Horizontal")}
                onClick={() => animeCardSwitchStore.setCurrentAnimeCardType("Horizontal")}>
            <HorizontalAnimeCardIcon/>
        </button>
    </div>
})