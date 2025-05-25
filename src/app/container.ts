import {Container} from "inversify";
import {BrowseGenresPopupStore} from "../shared/ui/default-layout";
import {GenresService} from "../shared/api/genres-service.ts";
import {GenresStore} from "../shared/ui/default-layout/genres/genres.store.ts";

export const container = new Container();
container.bind<BrowseGenresPopupStore>(BrowseGenresPopupStore).toSelf().inSingletonScope()
container.bind<GenresService>(GenresService).toSelf().inSingletonScope()
container.bind<GenresStore>(GenresStore).toSelf().inSingletonScope()

