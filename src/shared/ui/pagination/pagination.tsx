import {paginationContainer, paginationButton, paginationButtonActive} from "./pagination.styles";
import {Interpolation, Theme} from "@emotion/react";
import {observer} from "mobx-react";
import {scrollToTop} from "../scroll-to-top.ts";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    styles?: Interpolation<Theme>;
}

type PaginationItem = {
    item: number | "...",
    key: string,
};

export const Pagination = observer(({
                                        currentPage,
                                        totalPages,
                                        onPageChange,
                                        styles
                                    }: PaginationProps) => {
    if (totalPages <= 1) return null;

    const getVisiblePages = (): number[] => {
        const potentialPages = [
            1,
            2,
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
            totalPages - 2,
            totalPages - 1,
            totalPages
        ];

        return potentialPages
            .filter(page => page > 0 && page <= totalPages)
            .filter((page, index, array) => array.indexOf(page) === index)
            .sort((a, b) => a - b);
    };

    const generatePaginationItems = (pages: number[]): PaginationItem[] => {
        const items: PaginationItem[] = [];

        for (let i = 0; i < pages.length; i++) {
            items.push({item: pages[i], key: pages[i].toString()});

            if (i < pages.length - 1 && pages[i + 1] !== pages[i] + 1) {
                items.push({item: "...", key: pages[i] + "..."});
            }
        }

        return items;
    };

    const visiblePages = getVisiblePages();
    const paginationItems = generatePaginationItems(visiblePages);

    const handlePaginationItemClick = (item: PaginationItem) => {
        if (typeof item.item === "number") {
            onPageChange(item.item)
        }
    }

    return (
        <nav css={[paginationContainer, styles]} aria-label="Pagination">
            {paginationItems.map((item) => (
                <button
                    key={item.key}
                    css={(theme: Theme) => [
                        paginationButton(theme),
                        item.item === currentPage && paginationButtonActive(theme)
                    ]}
                    aria-current={item.item === currentPage ? "page" : undefined}
                    onClick={() => handlePaginationItemClick(item)}
                    disabled={item.item === currentPage}
                >
                    {item.item}
                </button>
            ))}
        </nav>
    );
});