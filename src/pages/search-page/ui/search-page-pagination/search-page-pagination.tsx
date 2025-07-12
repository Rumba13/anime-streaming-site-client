import {paginationStyles} from "../search-page.styles.ts";
import {Pagination} from "../../../../shared/ui/pagination/pagination.tsx";
import {useSearchParams} from "react-router-dom";
import {URL_PARAMS} from "../../../../shared/lib/url-params.ts";
import {observer} from "mobx-react";
import {useEffect} from "react";

type PropsType = {
    totalPages: number;
    currentPage: number;
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

export const SearchPagePagination = observer(({currentPage, totalPages}:PropsType) => {
    const {handlePageChange} = usePagination();

    useEffect(() => {

    }, [totalPages]);

    return <Pagination styles={paginationStyles} onPageChange={handlePageChange} currentPage={currentPage}
                       totalPages={totalPages}/>
})