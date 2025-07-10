import {inject, injectable} from "inversify";
import {AnimeService} from "../../../shared/api/anime-service.ts";
import {makeAutoObservable} from "mobx";
import {JikanPagination} from "../../../shared/types/jikan-pagination.ts";
import {Anime} from "../../../shared/types/anime.ts";
import {ID} from "../../../shared/types";
import {scrollToTop} from "../../../shared/ui/scroll-to-top.ts";

type SearchParams = {
    genreIds?: ID[];
    excludedGenreIds?: ID[];
    page?: number;
}

@injectable()
export class SearchAnimeStore {
    constructor(
        @inject(AnimeService) private readonly animeService: AnimeService,
    ) {
        makeAutoObservable(this);
    }

    public pagination: JikanPagination<Anime> | null = null;
    public setPagination = (pagination: JikanPagination<Anime> | null) => this.pagination = pagination;

    public isLoading: boolean = false;
    public setIsLoading = (isLoading: boolean) => this.isLoading = isLoading;


    public async search({excludedGenreIds = [], genreIds = [], page = 1}: SearchParams) {
        this.setIsLoading(true);
        try {
            this.setPagination(await this.animeService.search(genreIds, page, excludedGenreIds))
            scrollToTop()
        } catch (err) {
            console.error(err);
        } finally {
            this.setIsLoading(false);
        }

    }
    public getTotalPageCount() {
        return Math.ceil((this.pagination?.pagination.items.total || 1) / (this.pagination?.pagination?.items?.per_page || 1));
    }
}