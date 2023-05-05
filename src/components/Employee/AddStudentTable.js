import { useState } from "react";
import useAddStudentListStore from "../../hooks/useAddStudentListStore";
import AddStudentRow from "./AddStudentRow";
import ReactPaginate from 'react-paginate';
import { useEffect } from "react";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";

function AddStudentTable({changePage, currentPage}) {
    const addStudentList = useAddStudentListStore((state) => state.addStudentList);
    const count = useAddStudentListStore((state) => state.count);
    const pageCount = useAddStudentListStore((state) => state.pages);

    const handlePageClick = (event) => {
        changePage(event.selected);
    };


    return ( 
    <>
        <div className="addStudentTable">
            <table>
                <thead>
                    <tr>
                        <th>
                            Student Number
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Affiliation
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {addStudentList ? addStudentList.map((student) => 
                <AddStudentRow student={student} /> 
            ): <td>"No students with that keyword"</td>}            
                </tbody>
            </table>
        </div>
        <div className="footer_container">
            <span className="footer_text">{addStudentList.length > 0 ? `Showing ${currentPage * 10 + 1} to ${currentPage * 10 + addStudentList.length} of ${count} entries` : "No entries to show"}</span>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination_buttons_div"
                pageLinkClassName="pagination_buttons"
                previousLinkClassName="pagination_buttons"
                nextLinkClassName="pagination_buttons"
                activeLinkClassName="pagination_buttons_active"
                forcePage={currentPage}
            />
        </div>
</>);
}

export default AddStudentTable;