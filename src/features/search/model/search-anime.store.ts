import {inject, injectable} from "inversify";
import {AnimeService} from "../../../shared/api/anime-service.ts";
import {computed, makeObservable, observable, override, action} from "mobx";
import {JikanPagination} from "../../../shared/types/jikan-pagination.ts";
import {Anime} from "../../../shared/types/anime.ts";
import {scrollToTop} from "../../../shared/ui/scroll-to-top.ts";
import {SearchDto} from "../../../shared/types/search-dto.ts";
import {BaseLoadingStore} from "../../../shared/model/base-loading-store.ts";
import {BaseError} from "../../../shared/model/base-error.ts";
import {getAnimeImage} from "../../../entities/anime/ui/get-anime-image.ts";
import {preloadImage} from "../../../shared/lib/preload-image.ts";

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
            totalPageCount: computed,
            pagination: observable,
            setPagination: action,
            isFirstLoad: observable,
            setIsFirstLoad: action,
            // currentAbortController не нужен в makeObservable
        });
    }

    private readonly imageCountToPreload:number = 10;
    private currentAbortController: AbortController | null = null;

    public pagination: JikanPagination<Anime> | null = null;
    public setPagination = (pagination: JikanPagination<Anime> | null) => this.pagination = pagination;

    public isFirstLoad: boolean = true;
    public setIsFirstLoad = (isFirstLoad: boolean) => this.isFirstLoad = isFirstLoad;

    public async search(searchDto: SearchDto) {
        if (this.currentAbortController) this.currentAbortController.abort();

        this.currentAbortController = new AbortController();
        this.setIsLoading(true);

        try {
            const pagination = await this.animeService.search(searchDto, this.currentAbortController.signal);
            if (pagination && pagination.data) {
                await Promise.all(
                    pagination.data.slice(0, this.imageCountToPreload).map(anime => preloadImage(getAnimeImage(anime.images)))
                );
            }
            this.setPagination(pagination)
            scrollToTop()
        } catch (err) {
            const error = err as Error;
            if (error?.name === 'CanceledError' || error?.name === 'AbortError') {
                return;
            }
            console.error(err);
            this.setIsError(true);
            if (err instanceof BaseError) {
                this.setError(err);
            }
        } finally {
            this.setIsLoading(false);
            this.setIsFirstLoad(false);
            this.currentAbortController = null;
        }
    }

    get totalPageCount() {
        return this.pagination?.pagination.last_visible_page || 1;
    }
}