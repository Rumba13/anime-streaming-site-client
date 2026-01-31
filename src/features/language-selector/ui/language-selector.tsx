import "./language.styles";
import {Select, SelectOptionType} from "../../../shared/ui/select";
import {useTranslation} from "react-i18next";
import {languageSelectStyles} from "./language.styles.ts";

export function LanguageSelector() {
    const {i18n, t: tLanguages} = useTranslation("languages");

    const languageOptions: SelectOptionType[] = [
        {
            value: "ru",
            label: tLanguages("RUSSIAN"),
        },
        {
            value: "en",
            label: tLanguages("ENGLISH (UK)"),
        }
    ]

    const selectedOption = languageOptions.find(({value}) => value === i18n.language)!

    const handleSelect = ({value}: SelectOptionType) => {
        void i18n.changeLanguage(value)
    }

    return <Select
        styles={languageSelectStyles}
        onSelect={handleSelect}
        selectedOption={selectedOption}
        options={languageOptions}/>
}