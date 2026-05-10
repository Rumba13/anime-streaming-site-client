import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {AnimeService} from "../../../../shared/api";
import {BaseLoadingStore} from "../../../../shared/model";
import {Anime, ID} from "../../../../shared/types";

@injectable()
class AnimeDetailsStore {
    @inject(AnimeService) private readonly animeService!: AnimeService
    @inject(BaseLoadingStore) public readonly loadingStore!: BaseLoadingStore

    public animeDetails: Anime | null = null;
    public setAnimeDetails = (animeDetails: Anime | null) => {
        this.animeDetails = animeDetails
    };

    constructor() {
        makeAutoObservable(this);
    }

    public async loadAnimeDetails(animeId: ID): Promise<void> {
        try {
            this.setAnimeDetails(null);
            this.loadingStore.setIsLoading(true);
            const response = await this.animeService.getAnimeById({id: animeId});
            this.loadingStore.setIsLoaded(true);
            this.loadingStore.setIsLoading(false);

            this.setAnimeDetails(response.data)
        } catch (error) {
            this.loadingStore.setIsError(true);
            this.setAnimeDetails(null);
            console.log(error);
        }
    }
}

export {AnimeDetailsStore}