import {makeAutoObservable} from "mobx";
import {inject, injectable} from "inversify";
import {GenresService} from "../../../api/genres-service.ts";
import {Genre} from "../../../api/types/genre.ts";

@injectable()
export class GenresStore {
    constructor(
        @inject(GenresService)
        public readonly genresService: GenresService,
    ) {
        makeAutoObservable(this)
    }

    public genres?: Genre[];
    public isLoading: boolean = false;
    public isError: boolean = false;

    public setIsLoading = (isLoading: boolean) => this.isLoading = isLoading
    public setIsError = (isError: boolean) => this.isError = isError

    async loadGenres() {
        this.setIsLoading(true)

        try {
            this.genres = await this.genresService.loadGenres();
        } catch (err) {
            console.error(err);
            this.setIsError(true)
        } finally {
            this.setIsLoading(false)
        }
    }
}