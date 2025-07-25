import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { AnimeService } from '../../../../shared/api';

@injectable()
class WelcomeBannersStore {
    public banners: string[] = [];
    public isLoading = false;

    @inject(AnimeService)
    public readonly animeService!: AnimeService;

    constructor() {
        makeAutoObservable(this);
    }

    public setBanners(banners: string[]) {
        this.banners = banners;
    }

    public setLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }

    public isLoaded() {
    return this.banners.length > 0 && !this.isLoading;
    }

    async loadBanners() {
        this.setLoading(true);
        try {
            const banners = await this.animeService.loadBanners();
            if (banners) {
                this.setBanners(banners);
            }
        } catch (error) {
            console.log(error);
        } finally {
            this.setLoading(false);
        }
    }
}
export {WelcomeBannersStore}