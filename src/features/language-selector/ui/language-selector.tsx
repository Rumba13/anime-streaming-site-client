import "./language-selector.scss";
import {Select, SelectOption} from "../../../shared/ui/select";
import {useState} from "react";

const languageOptions:SelectOption[] = [
    {
        value:"ru",
        label:"RUSSIAN (RU)",
    },
    {
        value:"en",
        label:"ENGLISH (UK)",
    }
]

export function LanguageSelector() {
    const [currentLanguage, setLanguage] = useState<SelectOption>(languageOptions[0]);

    return <Select onSelect={setLanguage} selectedOption={currentLanguage} options={languageOptions}/>
}