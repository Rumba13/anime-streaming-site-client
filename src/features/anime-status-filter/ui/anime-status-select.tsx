import {AnimeStatusFilterStore} from "../model/anime-status-filter.store.ts";
import {observer} from "mobx-react";
import {animeStatusList} from "../../../shared/lib/anime-status-list.ts";
import {AnimeStatus} from "../../../shared/types/anime-status.ts";
import {ToggleButtonGroup} from "../../../shared/ui/toggle-button-group/toggle-button-group.tsx";
import {animeStatusToTranslationKey} from "../../../shared/lib/anime-status-to-translation-key.ts";
import {useTranslation} from "react-i18next";

type PropsType = {
    animeStatusFilterStore: AnimeStatusFilterStore
}

export const AnimeStatusSelect = observer(({animeStatusFilterStore}: PropsType) => {
    const {t} = useTranslation();
    const animeStatusToSelectOption = (status: AnimeStatus) => ({value: status, label: t(animeStatusToTranslationKey[status])});
    const selectOptions = animeStatusList.map(animeStatusToSelectOption)

    return <ToggleButtonGroup
        options={selectOptions}
        value={animeStatusFilterStore.animeStatus}
        onChange={animeStatusFilterStore.toggleSelectedAnimeStatus}
    />
})