import {paginationContainer, paginationButton, paginationButtonActive} from "./pagination.styles";
import {Interpolation, Theme} from "@emotion/react";
import {observer} from "mobx-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    styles?: Interpolation<Theme>;
}

type PaginationItem = {
    label: number | "...",
    value: number | null,
    key: string,
};

const usePagination = (totalPages: number, currentPage: number) => {

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

    const generatePaginationItems = (visiblePages: number[]): PaginationItem[] => {
        const items: PaginationItem[] = [];

        for (let i = 0; i < visiblePages.length; i++) {
            items.push({label: visiblePages[i], value: visiblePages[i], key: visiblePages[i].toString()});

            if (i < visiblePages.length - 1 && visiblePages[i + 1] !== visiblePages[i] + 1) {
                items.push({label: "...", value: null, key: visiblePages[i] + "..."});
            }
        }

        return items;
    };

    return {paginationItems: generatePaginationItems(getVisiblePages())}
}

export const Pagination = observer(({
                                        currentPage,
                                        totalPages,
                                        onPageChange,
                                        styles
                                    }: PaginationProps) => {

    if (totalPages <= 1) return null;

    const {paginationItems} = usePagination(totalPages, currentPage)

    const handlePaginationItemClick = (page: number | null) => {
        if (typeof page === "number") {
            onPageChange(page)
        }
    }

    return <nav css={[paginationContainer, styles]} aria-label="Pagination">
        <button
            css={[paginationButton(currentPage === 1)]}
            onClick={() => handlePaginationItemClick(currentPage - 1)}
            disabled={currentPage === 1}
        >
            &lt;
        </button>
        {paginationItems.map(item => (
            <button
                key={item.key}
                css={[paginationButton(item.value === currentPage || item.value === null), item.value === currentPage && paginationButtonActive]}
                aria-current={item.value === currentPage ? "page" : undefined}
                onClick={() => handlePaginationItemClick(item.value)}
                disabled={item.value === currentPage}
            >
                {item.label}
            </button>
        ))}

        <button
            css={[paginationButton(currentPage === totalPages)]}
            onClick={() => handlePaginationItemClick(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            &gt;
        </button>
    </nav>
});