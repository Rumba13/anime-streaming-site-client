import {AnimeCardSwitchStore} from "../model/anime-card-switch.store";
import MiniAnimeCardIcon from "../../../assets/images/grid-layout.svg?react";
import HorizontalAnimeCardIcon from "../../../assets/images/flex-layout.svg?react";
import {animeCardSwitcherStyles, buttonStyles} from "./anime-card-switcher.styles";
import {observer} from "mobx-react";

type PropsType = {
    animeCardSwitchStore:AnimeCardSwitchStore
}

export const AnimeCardSwitcher = observer(({animeCardSwitchStore}:PropsType) => {
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