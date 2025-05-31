import "./language-selector.scss";
import {Select, SelectOption} from "../../../shared/ui/select";
import {useState} from "react";

const languageOptions:SelectOption[] = [
    {
        value:"ru",
        label:"ru",
    },
    {
        value:"en",
        label:"en",
    }
]

export function LanguageSelector() {
    const [currentLanguage, setLanguage] = useState<SelectOption>(languageOptions[0]);

    return <Select onSelect={setLanguage} selectedOption={currentLanguage} options={languageOptions}/>
}