import "./select.scss";
import {SelectOption} from "./select-option.ts";
import {useEffect, useState} from "react";
import clsx from "clsx/lite";

type PropsType = {
    options: SelectOption[],
    selectedOption: SelectOption,
    onSelect: (selectedOption: SelectOption) => void,
}

export function Select({options, selectedOption, onSelect}: PropsType) {
    const [isOpened, setIsOpened] = useState(false);
    const openSelect = () => setIsOpened(true);
    const closeSelect = () => setIsOpened(false);

    useEffect(() => {
        document.addEventListener("click", closeSelect);
    }, [])

    const visibleOptions = options.map((option) => (
        <li className="select__option" onClick={() => onSelect(option)}>
            {option.label}
        </li>
    ))

    return <div className={clsx("select", isOpened && "opened")} onClick={e => e.stopPropagation()}>
        <div className="select__title" onClick={openSelect}>{selectedOption.label}▼</div>

        <ul className="select__options">
            {visibleOptions}
        </ul>
    </div>
}