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
import { useState } from "react";
import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";
import StudentsWithDeficiencyContext from "./Context/StudentsWithDeficiencyContext";

const StudentsWithDeficiency = () => {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const deficiencyModal = useDeficiencyModalStore((state) => state.deficiencyModal);
    const alertIsOpen = useAlertModalStore((state) => state.isOpen);
    const confirmDeleteIsOpen = useConfirmDeleteModalStore((state) => state.isOpen);
    const arrowLeft = new URL("../images/ArrowCircleLeft.png", import.meta.url);
    const navigate = useNavigate();


    const fetchStudentsWithDeficiency = useStudentWithDeficiencyListStore((state) => state.fetchStudentsWithDeficiency);

    const [query, setQuery] = useState({
        student_id: "",
        name: "",
        page: 0
    });

    function refreshStudentList() {
        try {
            fetchStudentsWithDeficiency(activeDeficiencyName.name, query.student_id, query.name, query.page + 1);
        }
        catch (error) {
            console.error('An error occurred:', error.message);
            setQuery(prevState => ({
                student_id: "",
                name: "",
                page: 0
            }));
        }
        
    }

    function searchStudents(id_query, name_query) {
        setQuery(prevState => ({
            student_id: id_query,
            name: name_query,
            page: 0
        }));
    }

    function changePage(page_num) {
        setQuery(prevState => ({
            ...prevState,
            page: page_num
        }));
    }

    

    useEffect(() => {
        refreshStudentList();
    }, []);

    useEffect(() => {
        refreshStudentList();
    }, [query]);



    return (
        <StudentsWithDeficiencyContext.Provider value={refreshStudentList}>

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
                            <StudentsWithDeficiencySearch searchStudents={searchStudents} />
                            <StudentWithDeficiencyListTable changePage={changePage} currentPage={query.page} />
                        </div>
                    </div>

                </div>
            </div>
        </StudentsWithDeficiencyContext.Provider>
    )
}

export default StudentsWithDeficiency;