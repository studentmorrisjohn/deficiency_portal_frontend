import React, { useEffect } from "react";
import '../style.css'
import EmployeeNav from './EmployeeNav.js'
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import AddStudentTable from "./AddStudentTable";
import AddStudentSearch from "./AddStudentSearch";
import useAddStudentListStore from "../../hooks/useAddStudentListStore";
import useFinanceDeficiencyModalStore from "../../hooks/useFinanceDeficiencyModalStore";
import AddFinanceModal from "../Modals/AddFinanceModal";
import { useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { useState } from "react";
import AddStudentContext from "./Context/AddStudentContext";

const AddStudent = () => {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const financeDeficiencyModalIsOpen = useFinanceDeficiencyModalStore((state) => state.isOpen);
    const arrowLeft = new URL("../images/ArrowCircleLeft.png", import.meta.url);

    const navigate = useNavigate();
    const fetchAllStudents = useAddStudentListStore((state) => state.fetchAllStudents);
    const count = useAddStudentListStore((state) => state.count);

    const [query, setQuery] = useState({
        student_id: "",
        name: "",
        page: 0
    });

    function refreshStudentList() {
        try {
            if (!count) {
                setQuery(prevState => ({
                    ...prevState,
                    page: prevState.page - 1
                }));
            }
            fetchAllStudents(activeDeficiencyName.name, query.student_id, query.name, query.page + 1);
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
        <AddStudentContext.Provider value={refreshStudentList}>
            {financeDeficiencyModalIsOpen && <AddFinanceModal />}
            <div className="screenLayout">
                <EmployeeNav />
                <div className="title_contentDiv">
                    <div className="outerDivEmployee">
                        <div className="innerDivHeader">
                            <img src={arrowLeft} onClick={() => {navigate(-1)}} className="arrowLeft"/>
                            <span className="red_name">{activeDeficiencyName.name} ({activeDeficiencyName.category})</span>
                        </div>

                        <div className="innerDivider">
                            <AddStudentSearch searchStudents={searchStudents} />
                            <AddStudentTable changePage={changePage} currentPage={query.page} />
                        </div>
                    </div>
                </div>
            </div>
        </AddStudentContext.Provider>
    )
}

export default AddStudent;