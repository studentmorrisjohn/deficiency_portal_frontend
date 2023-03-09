import React, { useEffect } from "react";
import '../style.css'
import EmployeeNav from './EmployeeNav.js'
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import AddStudentTable from "./AddStudentTable";
import AddStudentSearch from "./AddStudentSearch";
import useAddStudentListStore from "../../hooks/useAddStudentListStore";
import useFinanceDeficiencyModalStore from "../../hooks/useFinanceDeficiencyModalStore";
import AddFinanceModal from "../Modals/AddFinanceModal";

const AddStudent = () => {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const financeDeficiencyModalIsOpen = useFinanceDeficiencyModalStore((state) => state.isOpen);

    return (
        <>
            {financeDeficiencyModalIsOpen && <AddFinanceModal />}
            <div className="screenLayout">
                <EmployeeNav />
                <div className="title_contentDiv">
                    <div className="outerDivEmployee">
                        <div className="innerDivHeader">
                            <span className="red_name">{activeDeficiencyName.name} ({activeDeficiencyName.category})</span>
                        </div>

                        <div className="innerDivider">
                            <AddStudentSearch />
                            <div className="addStudentTable">
                                <AddStudentTable />
                            </div>
                            <div className="footer_container">
                                <span className="footer_text">Showing 1 to 10 of 150 entries</span>
                                <div className="pagination_buttons_div">
                                    <button className="pagination_buttons"> Prev </button>
                                    <button className="pagination_buttons">1</button>
                                    <button className="pagination_buttons">2</button>
                                    <button className="pagination_buttons">3</button>
                                    <button className="pagination_buttons">4</button>
                                    <button className="pagination_buttons">5</button>
                                    <button className="pagination_buttons"> Next </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStudent;