import '../style.css'
import React from "react"
import { useState } from "react";
import { Navigate } from "react-router-dom";
import AddDeficiencyModal from "./AddDeficiencyModal";
import EmployeeNav from './EmployeeNav';

const pupLOGO = new URL("../images/PUPLOGO.png", import.meta.url)
const house = new URL("../images/House.png", import.meta.url)
const usercircle = new URL("../images/UserCircle.png", import.meta.url)

const HomescreenEmployee = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [goToProfileEmployee, setGoToProfileEmployee] = useState(false);
    const [goToPasswordEmployee, setGoToPasswordEmployee] = useState(false);

    if (goToProfileEmployee) {
        return <Navigate to="/ProfileEmployee" />
    }

    if (goToPasswordEmployee) {
        return <Navigate to="/PasswordEmployee" />
    }

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
                        <div className="container15">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Deficiency ID
                                        </th>
                                        <th>
                                            Category
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            D0000001
                                        </td>
                                        <td>
                                            Document
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a>D0000002</a>
                                        </td>
                                        <td>
                                            Certificate Of Good Moral
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomescreenEmployee;