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
        const [selectedIndex, setSelectedIndex] = useState(0);
        const closeSelect = () => setIsOpened(false);

        const updateSelectedIndex = () => setSelectedIndex(options.findIndex(option => option.value === selectedOption.value));

        const handleOpenSelect = () => {
            updateSelectedIndex()
            setIsOpened(true)
        };

        const handleOptionSelect = (selectedOption: SelectOption) => {
            onSelect(selectedOption)
            closeSelect();
        }

        const handleKeyDown = (e: React.KeyboardEvent) => {
            if (!isOpened) return

            switch (e.key) {
                case "ArrowDown": {
                    e.preventDefault();
                    if (selectedIndex !== -1 && selectedIndex !== options.length - 1) {
                        setSelectedIndex(selectedIndex => selectedIndex + 1)
                    }
                    break
                }
                case "ArrowUp": {
                    e.preventDefault();
                    if (selectedIndex !== -1 && selectedIndex !== 0) {
                        setSelectedIndex(selectedIndex => selectedIndex - 1)
                    }
                    break
                }
                case "Enter": {
                    e.preventDefault();
                    handleOptionSelect(options[selectedIndex]);
                    break
                }
                case "Escape":
                    closeSelect();
                    break;
            }
        }

        useEffect(() => {
            document.addEventListener("click", closeSelect);

            return () => document.removeEventListener("click", closeSelect);
        }, [])

        const renderOptions = options.map((option, index) => (
            <li
                className={clsx("select__option", index === selectedIndex && "select__option--selected")}
                onClick={() => {
                    setSelectedIndex(index)
                    handleOptionSelect(option)
                }}
                id={`option-${option.value}`}
                role="option"
                aria-selected={selectedOption.value === option.value}
            >
                {option.label}
            </li>
        ))

        return <div className={clsx("select", isOpened && "opened")} onClick={e => e.stopPropagation()}>
            <button
                className="select__title"
                aria-haspopup="listbox"
                aria-expanded={isOpened}
                aria-controls="select-dropdown"
                onClick={handleOpenSelect}
                onKeyDown={handleKeyDown}>
                {selectedOption.label}
                <span aria-hidden="true">▼</span>
            </button>

            <ul className="select__options">
                {renderOptions}
            </ul>
        </div>
    }