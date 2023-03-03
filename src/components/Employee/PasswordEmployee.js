import React from "react";
import '../style.css'
import { useState } from "react";
import { Navigate } from "react-router-dom";
import EmployeeNav from './EmployeeNav.js'

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

    if (goToHomescreenEmployee) {
        return <Navigate to="/HomescreenEmployee" />
    }

    return (
        <>
            <div className="screenLayout">
                <EmployeeNav />
                <div className="title_contentDiv_Auto">
                    <span className="page-title">Change Password</span>
                    <div className="outerDiv">
                        <div className="password_div">
                            <input type='password' name='old_pass'  placeholder="Old Password" className="changepass_input" />
                            <input type='password' name='new_pass'  placeholder="New Password" className="changepass_input" />
                            <input type='password' name='re_new_pass'  placeholder="Confirm Password" className="changepass_input" />
                        </div>
                        <div className="password_div2">
                            <button className="maroonButton">Change Password</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PasswordEmployee;