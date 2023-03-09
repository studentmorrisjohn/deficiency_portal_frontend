import React, { useEffect } from "react";
import '../style.css'
import EmployeeNav from './EmployeeNav.js'
import StudentWithDeficiencyListTable from "./StudentWithDeficiencyListTable";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import useDeficiencyModalStore from "../../hooks/useDeficiencyModalStore"
import StudentsWithDeficiencySearch from "./StudentsWithDeficiencySearch";
import DeficiencyModalEmployee from "./DeficiencyModalEmployee";
import AlertModal from "../Modals/AlertModal";
import useAlertModalStore from "../../hooks/useAlertModalStore";
import { useNavigate } from "react-router-dom";
import useConfirmDeleteModalStore from "../../hooks/useConfirmDeleteModalStore";
import ConfirmDeleteModal from "../Modals/ConfirmDeleteModal";

const StudentsWithDeficiency = () => {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const deficiencyModal = useDeficiencyModalStore((state) => state.deficiencyModal);
    const alertIsOpen = useAlertModalStore((state) => state.isOpen);
    const confirmDeleteIsOpen = useConfirmDeleteModalStore((state) => state.isOpen);
    const arrowLeft = new URL("../images/ArrowCircleLeft.png", import.meta.url);
    const navigate = useNavigate();


    return (
        <>
            {alertIsOpen && <AlertModal /> }
            {confirmDeleteIsOpen && <ConfirmDeleteModal />}
            <div> {deficiencyModal && <DeficiencyModalEmployee />} </div>
            <div className="screenLayout">
                <EmployeeNav />
                <div className="title_contentDiv">
                    <div className="outerDivEmployee">
                        <div className="innerDivHeader">
                            <img src={arrowLeft} onClick={() => {navigate(-1)}} className="arrowLeft"/>
                            <span className="red_name">{activeDeficiencyName.name} ({activeDeficiencyName.category})</span>
                        </div>
                        <div className="innerDivider">
                            <StudentsWithDeficiencySearch />
                            <div className="addStudentTable">
                                <StudentWithDeficiencyListTable />
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

export default StudentsWithDeficiency;