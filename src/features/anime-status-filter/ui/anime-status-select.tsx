import {AnimeStatusFilterStore} from "../model/anime-status-filter.store.ts";
import {observer} from "mobx-react";
import {animeStatusList} from "../../../shared/lib";
import {AnimeStatus} from "../../../shared/types";
import {ToggleButtonGroup} from "../../../shared/ui";
import {animeStatusToTranslationKey} from "../../../shared/lib";
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