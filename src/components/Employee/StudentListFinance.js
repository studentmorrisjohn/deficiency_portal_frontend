import React from "react";
import '../style.css'
import { useState } from "react";
import { Navigate } from "react-router-dom";

const pupLOGO = new URL("../images/PUPLOGO.png", import.meta.url)
const house = new URL("../images/House.png", import.meta.url)
const usercircle = new URL("../images/UserCircle.png", import.meta.url)
const StudentListFinance = () => {

    const [openDropdown, setOpenDropdown] = useState(false);
    const [goToProfileEmployee, setGoToProfileEmployee] = useState(false);
    const [goToPasswordEmployee, setGoToPasswordEmployee] = useState(false);
    const [goToHomescreenEmployee, setGoToHomescreenEmployee] = useState(false);

    if (goToProfileEmployee) {
        return <Navigate to="/ProfileEmployee" />
    }

    if (goToPasswordEmployee) {
        return <Navigate to="/PasswordEmployee" />
    }

    if (goToHomescreenEmployee) {
        return <Navigate to="/HomescreenEmployee" />
    }

    return (
        <>
            <div className="screenLayout">
                <div className="realheader">
                    <div className="headercontainer">
                        <img src={pupLOGO} className="pupLogo2" />
                        <span className="home-text9">Student Deficiency Portal</span>
                    </div>
                    <div className="headercontainer1">
                        <img src={house} className="image2" onClick={() => { setGoToHomescreenEmployee(true) }} />
                        <div className="dropdown">
                            <img src={usercircle} className="image3" onClick={() => setOpenDropdown(!openDropdown)} />
                            {openDropdown && (
                                <div className="dropdown-menu">
                                    <ul>

                                        <li onClick={() => {
                                            setGoToProfileEmployee(true);
                                        }}> Profile</li>
                                        <li onClick={() => {
                                            setGoToPasswordEmployee(true);
                                        }}>Change Password</li>
                                        <li>Sign Out</li>

                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="container16">
                    <div className="container17">
                        <span className="home-text19">Tuition Fee (Finance)</span>
                    </div>
                    <div className="container18">
                        <div className="container19">
                            <span className="home-text20">Enter Keyword:</span>
                            <input placeholder="Student Number"></input>
                            <span className="home-text20">Enter Keyword:</span>
                            <input placeholder="Name"></input>
                            <button className="home-button6">Search</button>
                            <button className="home-button7">Add New Student</button>
                        </div>
                        <div className="container20">
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
                                            Status
                                        </th>
                                        <th>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            201X-XXXXX-MN-0
                                        </td>
                                        <td>
                                            Marcial, John Erwin Dolor
                                        </td>
                                        <td>
                                            Organizations, Org, Org...
                                        </td>
                                        <td>
                                            Pending
                                        </td>
                                        <td>
                                            <button>V</button>
                                            <button>E</button>
                                            <button>X</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            201X-XXXXX-MN-0
                                        </td>
                                        <td>
                                            Surname, First Name MI
                                        </td>
                                        <td>
                                            Organizations, Org, Org...
                                        </td>
                                        <td>
                                            Pending
                                        </td>
                                        <td>
                                            <button>V</button>
                                            <button>E</button>
                                            <button>X</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="container21">
                            <span className="home-text21">Showing 1 to 10 of 150 entries</span>
                            <div className="container22">
                                <button className="home-button8"> Prev </button>
                                <button className="home-button8">1</button>
                                <button className="home-button8">2</button>
                                <button className="home-button8">3</button>
                                <button className="home-button8">4</button>
                                <button className="home-button8">5</button>
                                <button className="home-button8"> Next </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentListFinance;