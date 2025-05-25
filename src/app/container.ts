import {Container} from "inversify";
import {BrowseGenresPopupStore} from "../shared/ui/default-layout";

export const container = new Container();
container.bind<BrowseGenresPopupStore>(BrowseGenresPopupStore).toSelf().inSingletonScope()

