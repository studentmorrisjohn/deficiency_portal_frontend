import React from "react";
import '../style.css'
import { useState } from "react";
import { Navigate } from "react-router-dom";

const pupLOGO = new URL("../images/PUPLOGO.png", import.meta.url)
const house = new URL("../images/House.png", import.meta.url)
const usercircle = new URL("../images/UserCircle.png", import.meta.url)

const PasswordEmployee = () => {

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
    
    if(goToHomescreenEmployee) {
        return <Navigate to ="/HomescreenEmployee" />
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
                    <span className="home-text10">Change Password</span>
                </div>

                <div className="container10">
                    <span className="home-text11">MARCIAL, JOHN ERWIN DOLOR (2019-XXXXX-MN-0)</span>
                </div>
                <div className="container11">
                    <input type='password' placeholder="Old Password" className="textinput2" />
                    <input type='password' placeholder="New Password" className="textinput2" />
                    <input type='password' placeholder="Confirm Password" className="textinput2" />
                </div>
                <div className="container10">
                    <button className="home-button3">Change Password</button>
                </div>

            </div>

        </>
    )
}

export default PasswordEmployee;