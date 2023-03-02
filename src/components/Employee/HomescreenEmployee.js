import '../style.css'
import React from "react"
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AddDeficiencyModal from "./AddDeficiencyModal";
import EmployeeNav from './EmployeeNav';
import DeficiencyNamesTable from './DeficiencyNamesTable';
import DeficiencyNamesSearch from './DeficiencyNamesSearch';

const pupLOGO = new URL("../images/PUPLOGO.png", import.meta.url)
const house = new URL("../images/House.png", import.meta.url)
const usercircle = new URL("../images/UserCircle.png", import.meta.url)

const HomescreenEmployee = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div> {openModal && <AddDeficiencyModal closeModal={setOpenModal} />} </div>
            <div className="screenLayout">
                <EmployeeNav />
                <div className="smaller_title_contentDiv">
                    <span className="page-title"> Home </span>
                    <div className="homescreen_Div">
                        <span className="red_name">EMPLOYEE NAME (DEPARTMENT)</span>
                        <div className="innerDivider">
                            <div className="divStudentDeficiencySearch">
                                <span className="addStudentSearch_subtext">Enter Keyword:</span>
                                <DeficiencyNamesSearch />

                                <button className="red_button" onClick={() => { setOpenModal(true); }}>Add New Deficiency</button>
                            </div>
                            <DeficiencyNamesTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomescreenEmployee;