import {inject, injectable} from "inversify";
import {AnimeService} from "../../../shared/api";
import {computed, makeObservable, observable, override, action} from "mobx";
import {JikanPagination} from "../../../shared/types";
import {Anime} from "../../../shared/types";
import {scrollToTop} from "../../../shared/ui/scroll-to-top";
import {SearchDto} from "../../../shared/types";
import {BaseLoadingStore} from "../../../shared/model";
import {BaseError} from "../../../shared/model";
import {getAnimeImage} from "../../../entities/anime";
import {preloadImage} from "../../../shared/lib";

@injectable()
class SearchAnimeStore extends BaseLoadingStore {
    @inject(AnimeService) private readonly animeService!: AnimeService

    constructor(
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
        });
    }

    private readonly IMAGE_COUNT_TO_PRELOAD:number = 10;
    private currentAbortController: AbortController | null = null;

    public pagination: JikanPagination<Anime> | null = null;
    public setPagination = (pagination: JikanPagination<Anime> | null) => {
        this.pagination = pagination
    };

    public isFirstLoad: boolean = true;
    public setIsFirstLoad = (isFirstLoad: boolean) => this.isFirstLoad = isFirstLoad;

    private preloadImages = async (pagination:JikanPagination<Anime> | null) => {
        if (pagination && pagination.data) {
            await Promise.all(
                pagination.data.slice(0, this.IMAGE_COUNT_TO_PRELOAD).map(anime => preloadImage(getAnimeImage(anime.images)))
            );
        }
    }

    public async search(searchDto: SearchDto) {
        if (this.currentAbortController) this.currentAbortController.abort();

        this.currentAbortController = new AbortController();
        this.setIsLoading(true);

        try {
            scrollToTop()
            const pagination = await this.animeService.search(searchDto, this.currentAbortController.signal);

            await this.preloadImages(pagination);

            this.setPagination(pagination)
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
export {SearchAnimeStore}