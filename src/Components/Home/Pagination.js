import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCoursesPagination } from "../../Store/Actions/Course";

const Pagination = ({total,currentPage = 1,pageSize = 10,onChangePage}) => {
    const [pager, setPager] = useState({});

    useEffect(() => {
        setPage();
        // props.dispatch(fetchCoursesPagination(currentPage));
    }, [currentPage])

    const setPage = () => {
        if (currentPage < 1 || currentPage > Math.ceil(total / pageSize)) {
            return;
        }
        const newPager = getPage();
        setPager(newPager);
    };

    const numPageShow = 10; // So luong page toi da để hiển thị.
    const getPage = () => {
        const totalPages = Math.ceil(total / pageSize);
        let startPage;
        let endPage;
        if (totalPages <= numPageShow) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage < Math.ceil(numPageShow / 2) + 1) {
                startPage = 1;
                endPage = numPageShow;
            } else if (
                currentPage + (numPageShow - Math.ceil(numPageShow / 2) + 1) >=
                totalPages
            ) {
                startPage = totalPages - (numPageShow - 1);
                endPage = totalPages;
            } else {
                startPage = currentPage - Math.floor(numPageShow / 2);
                endPage = currentPage + Math.ceil(numPageShow / 2) - 1;
            }
        }

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, total - 1);
        const pages = [...Array(endPage + 1 - startPage).keys()].map(
            i => startPage + i
        ); // Array(5): có độ dài 5 phần tử.

        return {
            total,
            currentPage,
            pageSize,
            startPage,
            endPage,
            startIndex,
            endIndex,
            pages
        };
    };

    return (
        <ul className="pagination__ul">
            <li>
                <button onClick={() => onChangePage(1)}>{"<<"}</button>
            </li>
            <li>
                <button onClick={() => onChangePage(currentPage - 1)}>{"<"}</button>
            </li>
            {pager.pages && pager.pages.map(page => (
                <li className={currentPage === page ? "active" : ""} key={page}>
                    <button onClick={() => onChangePage(page)}>
                        {page}</button>
                </li>
            ))}
            <li>
                <button onClick={() => onChangePage(currentPage + 1)}>{">"}</button>
            </li>
            <li>
                <button onClick={() => onChangePage(total)}>{">>"}</button>
            </li>
        </ul>
    );
};

// const mapDispatchToProps = dispatch => {
//     return {
//         getCouresPagination: (page) => {
//             dispatch(fetchCoursesPagination(page))
//         }
//     }
// }

export default connect()(Pagination);