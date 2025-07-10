import {inject, injectable} from "inversify";
import {makeAutoObservable} from "mobx";
import {Genre, ID} from "../../../shared/types";
import {GenresService} from "../../../shared/api";

@injectable()
export class GenresStore {
    constructor(
        @inject(GenresService) private genresService: GenresService,
    ) {
        makeAutoObservable(this)
    }

    public genres: Genre[] = []
    public setGenres = (genres: Genre[]) => this.genres = genres;

    public isLoading: boolean = false;
    public setIsLoading = (isLoading: boolean) => this.isLoading = isLoading;


    public async loadGenres() {
        this.setIsLoading(true)

        try {
            const genres: Genre[] = await this.genresService.loadGenres();
            this.setGenres(genres)
        } catch (e) {
            console.error(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    public getGenreById = (id: ID) => this.genres.find(({mal_id}) => mal_id === id);
}