import '../style.css'
import React from "react"
import { useState } from "react";
import { Navigate } from "react-router-dom";
import AddDeficiencyModal from "./AddDeficiencyModal";
import EmployeeNav from './EmployeeNav';
import DeficiencyNamesTable from './DeficiencyNamesTable';

const pupLOGO = new URL("../images/PUPLOGO.png", import.meta.url)
const house = new URL("../images/House.png", import.meta.url)
const usercircle = new URL("../images/UserCircle.png", import.meta.url)

const HomescreenEmployee = () => {
    const [openModal, setOpenModal] = useState(false);

    const [searchBoxInput, setSearchBoxInput] = useState("");

    const onChange = (e) => {
        setSearchBoxInput(e.target.value);
    };

    return (
        <>
            <div> {openModal && <AddDeficiencyModal closeModal={setOpenModal} />} </div>
            <div className="container2">
                <EmployeeNav />
                <span className="home-text16"> Home </span>
                <div className="container12">
                    <span className="home-text17">EMPLOYEE NAME (DEPARTMENT)</span>
                    <div className="container13">
                        <div className="container14">
                            <span className="home-text18">Enter Keyword:</span>
                            <input placeholder="Deficiency" className="text-input3"></input>
                            <button className="home-button4">Search</button>
                            <button className="home-button5" onClick={() => { setOpenModal(true); }}>Add New Deficiency</button>
                        </div>
                        <DeficiencyNamesTable />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomescreenEmployee;