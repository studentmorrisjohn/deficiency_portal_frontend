import React from "react";
import '../style.css'
import { useState } from "react";
import { Navigate } from "react-router-dom";
import EmployeeNav from './EmployeeNav.js'

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
                <EmployeeNav />
                <div className="title_contentDiv">
                    <span className="page-title">Employee Profile</span>

                    <div className="outerDivAuto">
                        <div className="inner_div_divider">
                            <div className="profile_table">

                                <div className="profile_col">
                                    <div className="profile_row">
                                        <div className="profile_category">
                                            <span className="">Student No.</span>
                                        </div>
                                        <div className="profile_fetched">
                                            <span className=""></span>
                                        </div>
                                    </div>
                                    <div className="profile_row">
                                        <div className="profile_category">
                                            <span className="">Name</span>
                                        </div>
                                        <div className="profile_fetched">
                                            <span className=""></span>
                                        </div>
                                    </div>
                                    <div className="profile_row">
                                        <div className="profile_category">
                                            <span className="">Gender</span>
                                        </div>
                                        <div className="profile_fetched">
                                            <span className=""></span>
                                        </div>
                                    </div>
                                    <div className="profile_row">
                                        <div className="profile_category">
                                            <span className="">Birthdate</span>
                                        </div>
                                        <div className="profile_fetched">
                                            <span className=""></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="profile_col">
                                    <div className="profile_row">
                                        <div className="profile_category">
                                            <span className="">Program</span>
                                        </div>
                                        <div className="profile_fetched">
                                            <span className=""></span>
                                        </div>
                                    </div>
                                    <div className="profile_row">
                                        <div className="profile_category">
                                            <span className="home-text12">Mobile No.</span>
                                        </div>
                                        <div className="profile_fetched">
                                            <span className=""></span>
                                        </div>
                                    </div>
                                    <div className="profile_row">
                                        <div className="profile_category">
                                            <span className="">Webmail</span>
                                        </div>
                                        <div className="profile_fetched">
                                            <span className=""></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <span className="italic_text_employee">I hereby certify that all the information provided are true and correct to the best of my knowledge.</span>
                            <button className="maroonButton">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileEmployee;