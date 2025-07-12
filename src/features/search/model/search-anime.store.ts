import {inject, injectable} from "inversify";
import {AnimeService} from "../../../shared/api/anime-service.ts";
import {computed, makeObservable, observable, override,action} from "mobx";
import {JikanPagination} from "../../../shared/types/jikan-pagination.ts";
import {Anime} from "../../../shared/types/anime.ts";
import {scrollToTop} from "../../../shared/ui/scroll-to-top.ts";
import {SearchDto} from "../../../shared/types/search-dto.ts";
import {BaseLoadingStore} from "../../../shared/model/base-loading-store.ts";

@injectable()
export class SearchAnimeStore extends BaseLoadingStore {
    constructor(
        @inject(AnimeService) private readonly animeService: AnimeService,
    ) {
        super()

        makeObservable(this, {
            error: override,
            isError: override,
            isLoaded: override,
            setError: override,
            setIsLoaded: override,
            setIsLoading: override,
            isLoading: override,
            setIsError: override,
            getTotalPageCount: computed,
            pagination: observable,
            setPagination:action,
            isFirstLoad: observable,
            setIsFirstLoad:action,
            animeService: observable,
        });
    }

    public pagination: JikanPagination<Anime> | null = null;
    public setPagination = (pagination: JikanPagination<Anime> | null) => this.pagination = pagination;

    public isFirstLoad: boolean = true;
    public setIsFirstLoad = (isFirstLoad: boolean) => this.isFirstLoad = isFirstLoad;

    public async search({excludedGenreIds, genreIds, page,type}: SearchDto) {
        this.setIsLoading(true);

        try {
            this.setPagination(await this.animeService.search(genreIds, page, excludedGenreIds, type))
            scrollToTop()
        } catch (err) {
            console.error(err);
            this.setIsError(true);
        } finally {
            this.setIsLoading(false);
            this.setIsFirstLoad(false);
        }

    }
     get getTotalPageCount() {
        return this.pagination?.pagination.last_visible_page || 1;
    }
}