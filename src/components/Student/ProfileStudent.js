import React, { useState, useEffect } from "react";
import '../style.css';

import StudentNav from "./StudentNav"
import StudentName from "./StudentName";
import { fetchProfileData } from "../../functions/student";
import AffiliationTable from "./AffiliationTable";

const ProfileStudent = () => {
    const [studentProfile, setStudentProfile] = useState(
        {
            username: "",
            name: "",
            gender: "",
            birth_date: "",
            department: "",
            mobile_number: "",
            email: ""
        }
    );

    useEffect(() => {
        async function getStudentProfile() {
            const response = await fetchProfileData();

            setStudentProfile(response);
        }

        getStudentProfile();

    }, []);

    return (
        <>
            <div className="screenLayout">
                <StudentNav />

                <div className="title_contentDiv">
                    <span className="page-title">Student Profile</span>


                    <div className="outerDiv">
                        <StudentName />
                        <div className="inner_div_divider">
                            <div className="profile_table">

                                <div className="profile_col">
                                    <div className="profile_row">
                                        <div className="profile_category">
                                            <span className="">Student No.</span>
                                        </div>
                                        <div className="profile_fetched">
                                            <span className="">{studentProfile.username}</span>
                                        </div>
                                    </div>
                                    <div className="profile_row">
                                        <div className="profile_category">
                                            <span className="">Name</span>
                                        </div>
                                        <div className="profile_fetched">
                                            <span className="">{studentProfile.name}</span>
                                        </div>
                                    </div>
                                    <div className="profile_row">
                                        <div className="profile_category">
                                            <span className="">Gender</span>
                                        </div>
                                        <div className="profile_fetched">
                                            <span className="">{studentProfile.gender}</span>
                                        </div>
                                    </div>
                                    <div className="profile_row">
                                        <div className="profile_category">
                                            <span className="">Birthdate</span>
                                        </div>
                                        <div className="profile_fetched">
                                            <span className="">{studentProfile.birth_date}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="profile_col">
                                    <div className="profile_row">
                                        <div className="profile_category">
                                            <span className="">Program</span>
                                        </div>
                                        <div className="profile_fetched">
                                            <span className="">{studentProfile.department}</span>
                                        </div>
                                    </div>
                                    <div className="profile_row">
                                        <div className="profile_category">
                                            <span className="home-text12">Mobile No.</span>
                                        </div>
                                        <div className="profile_fetched">
                                            <span className="">{studentProfile.mobile_number}</span>
                                        </div>
                                    </div>
                                    <div className="profile_row">
                                        <div className="profile_category">
                                            <span className="">Webmail</span>
                                        </div>
                                        <div className="profile_fetched">
                                            <span className="">{studentProfile.email}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <span className="inner_title">Affiliations</span>
                            <AffiliationTable />
                            <span className="italic_text">I hereby certify that all the information provided are true and correct to the best of my knowledge.</span>
                            <button className="maroonButton">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileStudent;

