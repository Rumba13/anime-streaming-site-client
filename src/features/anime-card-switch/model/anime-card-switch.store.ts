import {injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {AnimeCardType} from "./anime-card-type.ts";
import {AnimeCard, AnimeMiniCard} from "../../../entities/anime";

@injectable()
export class AnimeCardSwitchStore {
    constructor() {
        makeAutoObservable(this);
    }

    public currentAnimeCardType:AnimeCardType = "Mini";
    public setCurrentAnimeCardType = (animeCardType:AnimeCardType) => this.currentAnimeCardType = animeCardType;

    public getCardComponent = () => this.currentAnimeCardType === "Mini" ? AnimeMiniCard : AnimeCard;
}