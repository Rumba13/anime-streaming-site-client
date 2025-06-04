import "./language-selector.scss";
import {Select, SelectOptionType} from "../../../shared/ui/select";
import {useTranslation} from "react-i18next";

export function LanguageSelector() {
    const {i18n,t} = useTranslation();
    const languageOptions: SelectOptionType[] = [
        {
            value: "ru",
            label: t("RUSSIAN"),
        },
        {
            value: "en",
            label: t("ENGLISH (UK)"),
        }
    ]

    const selectedOption = languageOptions.find(({value}) => value === i18n.language)!

    const handleSelect = ({value}: SelectOptionType) => {
        void i18n.changeLanguage(value)
    }

    return <Select onSelect={handleSelect}
                   selectedOption={selectedOption}
                   options={languageOptions}/>
}