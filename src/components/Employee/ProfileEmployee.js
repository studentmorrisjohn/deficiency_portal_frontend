import React from "react";
import '../style.css'
import { useState } from "react";
import { Navigate } from "react-router-dom";

const pupLOGO = new URL("../images/PUPLOGO.png", import.meta.url)
const house = new URL("../images/House.png", import.meta.url)
const usercircle = new URL("../images/UserCircle.png", import.meta.url)

const ProfileEmployee = () => {

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

                <div className="container3">
                    <span className="home-text10">Student Profile</span>
                </div>

                <div className="container4">
                    <span className="home-text11">MARCIAL, JOHN ERWIN DOLOR (2019-XXXXX-MN-0)</span>
                    <div className="container6">
                        <div className="container7">

                            <div className="container8">
                                <span className="home-text12">Student Number</span>
                                <span className="home-text12">Name</span>
                                <span className="home-text12">Gender</span>
                                <span className="home-text12">Birthdate</span>
                            </div>
                            <div className="container9">
                                <span className="home-text13">2019-XXXXX-MN-0</span>
                                <span className="home-text13">MARCIAL, JOHN ERWIN DOLOR</span>
                                <span className="home-text13">Male</span>
                                <span className="home-text13">Month XX, XXXX</span>
                            </div>

                            <div className="container8">
                                <span className="home-text12">Program</span>
                                <span className="home-text12">Mobile No.</span>
                                <span className="home-text12">Webmail</span>
                            </div>
                            <div className="container9">
                                <span className="home-text13">Bachelor of Science in Computer Engineering</span>
                                <span className="home-text13">69XXXXXXXXX</span>
                                <span className="home-text13"> johndoe@iskolarngbayan.pup.edu.ph</span>
                            </div>
                        </div>

                        <span className="home-text14">Affiliations</span>
                        <div className="center-div">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Organization Name
                                        </th>
                                        <th>
                                            Position
                                        </th>
                                        <th>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Association of Concerned Computer Engineering Students for Service
                                        </td>
                                        <td>
                                            Vice President - External
                                        </td>
                                        <td>
                                            Form 137
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type='text' placeholder="Organization Name" className="textbox" />
                                        </td>
                                        <td>
                                            <input type='text' placeholder="position" className="textbox" />
                                        </td>
                                        <td>
                                            <button>X</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <span className="home-text15">I hereby certify that all the information provided are true and correct to the best of my knowledge.</span>
                        <button className="home-button3">Save</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileEmployee;