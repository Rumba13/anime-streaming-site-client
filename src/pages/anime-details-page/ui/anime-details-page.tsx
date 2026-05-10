import {useNavigate, useParams} from "react-router-dom";
import {SignUpModal, SignUpModalStore} from "../../../features/auth/sign-up-modal";
import {SignInModal, SignInModalStore} from "../../../features/auth/sign-in-modal";
import {Search} from "../../../features/search";
import {
    noBackgroundStyles,
    searchStyles
} from "../../home-page/ui/home-page.styles.ts";
import {LanguageSelector} from "../../../features/language-selector";
import {JikanStatus} from "../../../features/jikan-status";
import {AnimationsSwitch, AnimationsSwitchStore} from "../../../features/animations-switch";
import {DefaultLayout} from "../../../shared/layouts";
import {useInjection} from "inversify-react";
import {ROUTES} from "../../../shared/lib";
import {backButtonStyles, contentStyles} from "./anime-details-page.styles.ts";
import {AnimeDetailsCard, AnimeDetailsStore} from "../../../entities/anime";
import {useEffect} from "react";
import {parseAnimeIdFromString} from "../../../shared/lib/parse-anime-id-from-string.ts";
import {observer} from "mobx-react";

export const AnimeDetailsPage = observer(() => {
    const {id} = useParams();

    const animeId = parseAnimeIdFromString(id || "");

    console.log("animeId:", animeId,id);

    const navigate = useNavigate()
    const animationsSwitchStore = useInjection(AnimationsSwitchStore);
    const signUpModalStore = useInjection(SignUpModalStore);
    const signInModalStore = useInjection(SignInModalStore);

    const animeDetailsStore = useInjection(AnimeDetailsStore);

    useEffect(() => {
        if (!animeId) {
            void navigate(ROUTES.NOT_FOUND_PAGE);
        } else {
            void animeDetailsStore.loadAnimeDetails(animeId);
        }
    }, [animeId])

    const handleSearch = (searchValue: string) => {
        void navigate(ROUTES.SEARCH_PAGE_SEARCH_QUERY(searchValue));
    }

    return <DefaultLayout
        openSignInModal={signInModalStore.modalStore.open}
        SignUpModalSlot={<SignUpModal openSignInModal={signInModalStore.modalStore.open}/>}
        SignInModalSlot={<SignInModal openSignUpModal={signUpModalStore.modalStore.open}/>}
        SearchSlot={<Search styles={searchStyles} onSearch={handleSearch}/>}
        LanguageSelectorSlot={<LanguageSelector/>}
        JikanStatusSlot={<JikanStatus styles={noBackgroundStyles}/>}
        AnimationsSwitchSlot={<AnimationsSwitch styles={noBackgroundStyles}
                                                animationsSwitchStore={animationsSwitchStore}/>}
    >

        <div css={contentStyles}>
            AnimeDetailsPage {id}
            <button type="button" css={backButtonStyles} onClick={() => navigate(-1)}>
                Назад
            </button>
            {animeDetailsStore.loadingStore.isLoading || animeDetailsStore.animeDetails === null ? "Loading" :
                <AnimeDetailsCard anime={animeDetailsStore.animeDetails}/>}
        </div>
    </DefaultLayout>
})