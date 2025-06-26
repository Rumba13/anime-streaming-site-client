import {SelectOptionType} from "./select-option-type.ts";
import { useEffect, useMemo, useRef, useState} from "react";
import {selectContainerStyle, selectOptionsStyle, selectOptionStyle, selectTriggerStyle} from "./select.styles.ts";

type SelectOptionProps = {
    isActive: boolean;
    isSelected: boolean;
    onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
    title: string
    value: string
}

function SelectOption({isSelected, isActive, title, value, onClick}: SelectOptionProps) {
    return <li
        css={selectOptionStyle(isActive)}
        key={value}
        onClick={onClick}
        id={`option-${value}`}
        role="option"
        aria-selected={isSelected}
        aria-label={title}
    >
        {title}
    </li>
}

type SelectProps = {
    options: SelectOptionType[],
    selectedOption: SelectOptionType,
    onSelect: (selectedOption: SelectOptionType) => void,
}

export function Select({options, selectedOption, onSelect}: SelectProps) {
    const [isOpened, setIsOpened] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const closeSelect = () => setIsOpened(false)
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setActiveIndex(options.findIndex(option => option.value === selectedOption.value))
    }, [options, selectedOption.value]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!selectRef.current?.contains(target)) {
                closeSelect();
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [])

    const handleOptionSelect = (selectedOption: SelectOptionType) => {
        onSelect(selectedOption)
        closeSelect();
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isOpened) return

        switch (e.key) {
            case "ArrowDown": {
                e.preventDefault();
                if (activeIndex !== -1 && activeIndex !== options.length - 1) {
                    setActiveIndex(activeIndex => activeIndex + 1)
                }
                break
            }
            case "ArrowUp": {
                e.preventDefault();
                if (activeIndex > 0) {
                    setActiveIndex(activeIndex => activeIndex - 1)
                }
                break
            }
            case "Enter":
            case " ": {
                e.preventDefault();
                handleOptionSelect(options[activeIndex]);
                break
            }
            case "Escape":
            case "Tab":
                closeSelect();
                break;
            case "Home":
                e.preventDefault();
                setActiveIndex(0);
                break
            case "End":
                e.preventDefault();
                setActiveIndex(options.length - 1);
                break
        }
    }

    const optionsContent = useMemo(() => {
        if (options.length === 0) {
            return <></>
        }

        return options.map((option, index) => <SelectOption
            isActive={index === activeIndex}
            isSelected={selectedOption.value === option.value}
            onClick={() => {
                setActiveIndex(index)
                handleOptionSelect(option)
            }}
            title={option.label}
            value={option.value}
            key={option.value}
        />
        )
    }, [options, selectedOption.value, setActiveIndex, handleOptionSelect, activeIndex])

    return <div css={selectContainerStyle} ref={selectRef}>
        <button
            css={selectTriggerStyle}
            aria-haspopup="listbox"
            aria-controls="select-dropdown"
            aria-expanded={isOpened}
            aria-activedescendant={isOpened ? `option-${options[activeIndex]?.value}` : undefined}
            onClick={() => setIsOpened(isOpened => !isOpened)}
            onKeyDown={handleKeyDown}>
            {selectedOption.label}
            <span aria-hidden="true">▼</span>
        </button>

        <ul css={selectOptionsStyle(isOpened)}>
            {optionsContent}
        </ul>
    </div>
}