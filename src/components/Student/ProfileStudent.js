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

                <div className="container3">
                    <span className="home-text10">Student Profile</span>
                </div>

                <div className="container4">
                    <StudentName />
                    <div className="container6">
                        <div className="container7">

                            <div className="container8">
                                <span className="home-text12">Student Number</span>
                                <span className="home-text12">Name</span>
                                <span className="home-text12">Gender</span>
                                <span className="home-text12">Birthdate</span>
                            </div>
                            <div className="container9">
                                <span className="home-text13">{studentProfile.username}</span>
                                <span className="home-text13">{studentProfile.name}</span>
                                <span className="home-text13">{studentProfile.gender}</span>
                                <span className="home-text13">{studentProfile.birth_date}</span>
                            </div>

                            <div className="container8">
                                <span className="home-text12">Program</span>
                                <span className="home-text12">Mobile No.</span>
                                <span className="home-text12">Webmail</span>
                            </div>
                            <div className="container9">
                                <span className="home-text13">{studentProfile.department}</span>
                                <span className="home-text13">{studentProfile.mobile_number}</span>
                                <span className="home-text13">{studentProfile.email}</span>
                            </div>
                        </div>

                        <span className="home-text14">Affiliations</span>
                        <AffiliationTable />
                        <span className="home-text15">I hereby certify that all the information provided are true and correct to the best of my knowledge.</span>
                        <button className="home-button3">Save</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileStudent;

