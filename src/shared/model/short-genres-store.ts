import {makeAutoObservable} from "mobx";
import {inject, injectable} from "inversify";
import {GenresService} from "../api";
import {Genre} from "../types";

@injectable()
export class ShortGenresStore {
    constructor(
        @inject(GenresService)
        public readonly genresService: GenresService,
    ) {
        makeAutoObservable(this)
    }

    public mainGenres?: Genre[];
    public setGenres = (genres?: Genre[]) => this.mainGenres = genres;
    public isLoading: boolean = false;
    public isError: boolean = false;

    public setIsLoading = (isLoading: boolean) => this.isLoading = isLoading
    public setIsError = (isError: boolean) => this.isError = isError

    async loadGenres() {
        this.setIsLoading(true)

        try {
            this.setGenres(await this.genresService.loadMainGenres())
        } catch (err) {
            console.error(err);
            this.setIsError(true)
        } finally {
            this.setIsLoading(false)
        }
    }
}