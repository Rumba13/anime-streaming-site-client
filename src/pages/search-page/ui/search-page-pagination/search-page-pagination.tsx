import {Pagination} from "../../../../shared/ui";
import {useSearchParams} from "react-router-dom";
import {URL_PARAMS} from "../../../../shared/lib";
import {observer} from "mobx-react";
import {paginationStyles} from "./search-page-pagination.styles";
import {Interpolation, Theme} from "@emotion/react";

type PropsType = {
    totalPages: number;
    currentPage: number;
    styles?: Interpolation<Theme>
}

const usePagination = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handlePageChange = (page: number) => {
        const currentParams = Object.fromEntries(searchParams.entries());
        const updatedParams = {...currentParams, [URL_PARAMS.PAGE]: page.toString()};
        setSearchParams(updatedParams);
    }

    return {handlePageChange}
}

export const SearchPagePagination = observer(({currentPage, totalPages, styles}: PropsType) => {
    const {handlePageChange} = usePagination();

    return <Pagination styles={[paginationStyles, styles]} onPageChange={handlePageChange} currentPage={currentPage}
                       totalPages={totalPages}/>
})