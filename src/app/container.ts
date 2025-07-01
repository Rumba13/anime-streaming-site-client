import {Container} from "inversify";
import {GenresService} from "../shared/api";
import {ShortGenresStore} from "../shared/model";
import {BrowseGenresPopupStore} from "../shared/layouts";
import {AnimeService} from "../shared/api/anime-service.ts";
import {JikanStatusStore} from "../features/jikan-status";
import {ProfilePopupStore} from "../shared/layouts/default-layout/header/show-profile/profile-popup.store.ts";
import {ThemeStore} from "./theme/theme.store.ts";
import {AnimationsSwitchStore} from "../features/animations-switch";
import {WelcomeBannersStore} from "../pages/home-page/ui/welcome-section/welcome-banners.store.ts";
import {JikanClient} from "../shared/api/jikan-client.ts";

export const container = new Container();
container.bind<BrowseGenresPopupStore>(BrowseGenresPopupStore).toSelf().inSingletonScope()
container.bind<GenresService>(GenresService).toSelf().inSingletonScope()
container.bind<ShortGenresStore>(ShortGenresStore).toSelf().inSingletonScope()
container.bind<AnimeService>(AnimeService).toSelf().inSingletonScope()
container.bind<JikanStatusStore>(JikanStatusStore).toSelf().inSingletonScope()
container.bind<ProfilePopupStore>(ProfilePopupStore).toSelf().inSingletonScope()
container.bind<ThemeStore>(ThemeStore).toSelf().inSingletonScope()
container.bind<AnimationsSwitchStore>(AnimationsSwitchStore).toSelf().inSingletonScope()
container.bind<WelcomeBannersStore>(WelcomeBannersStore).toSelf().inSingletonScope()
container.bind<JikanClient>(JikanClient).toSelf().inSingletonScope()