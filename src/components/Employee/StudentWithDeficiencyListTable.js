import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import StudentWithDeficiencyListRow from "./StudentWithDeficiencyListRow";
import ReactPaginate from 'react-paginate';
import { useState } from "react";

function StudentListTable({changePage, currentPage}) {
    const studentsWithDeficiencyList = useStudentWithDeficiencyListStore((state) => state.studentsWithDeficiencyList);
    const count = useStudentWithDeficiencyListStore((state) => state.count);
    const pageCount = useStudentWithDeficiencyListStore((state) => state.pages);

    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);

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
                        {activeDeficiencyName.category === "Finance" ? <th>
                            Balance
                        </th> : ""}

                        <th style={{padding:"0 4rem"}}>
                            Status
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {studentsWithDeficiencyList? studentsWithDeficiencyList.map((studentWithDeficiency) => 
                        <StudentWithDeficiencyListRow studentWithDeficiency={studentWithDeficiency} />
                    ): <td>"No students with that keyword"</td>}            
                </tbody>
            </table>
        </div>
        <div className="footer_container">
        <span className="footer_text">{studentsWithDeficiencyList.length > 0 ? `Showing ${currentPage * 10 + 1} to ${currentPage * 10 + studentsWithDeficiencyList.length} of ${count} entries` : "No entries to show"}</span>
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
    </>
    );
}

export default StudentListTable;