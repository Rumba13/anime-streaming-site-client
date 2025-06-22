import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {AnimeService} from "../../../shared/api/anime-service.ts";

@injectable()
export class JikanStatusStore {
    private status: boolean = false;

    public getStatus(): boolean {
        return this.status;
    }

    public setStatus(isConnected: boolean) {
        this.status = isConnected;
    }

    constructor(
        @inject(AnimeService)
        public readonly animeService: AnimeService,
    ) {
        makeAutoObservable(this);

        void this.checkStatus()
    }

    public async checkStatus() {
        const status = await this.animeService.checkJikanApiStatus();
        this.setStatus(status)
    }
}