import React, { useState, useEffect } from "react";
import '../style.css';

import StudentNav from "./StudentNav"
import StudentName from "./StudentName";
import { fetchProfileData, fetchUpdateProfile } from "../../functions/student";
import AffiliationTable from "./AffiliationTable";
import Profile from "../General/Profile";
import SuccessModal from "../Modals/SuccessModal";
import FailedModal from "../Modals/FailedModal";
import useProfileDataStore from "../../hooks/useProfileDataStore";
import useSuccessModalStore from "../../hooks/useSuccessModalStore";
import FailedModal from "../Modals/FailedModal";

const ProfileStudent = () => {
    const profileData = useProfileDataStore((state) => state.profileData);
    const successModalIsOpen = useSuccessModalStore((state) => state.isOpen);
    const openSuccessModal = useSuccessModalStore((state) => state.openSuccessModal);

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

    async function getStudentProfile() {
        const response = await fetchProfileData();

        setStudentProfile(response);
    }

    async function updateProfile() {
        openSuccessModal("Your Profile was updated");
<<<<<<< HEAD
        // const response = await fetchUpdateProfile(profileData.mobile_number, profileData.email);
=======
        const response = await fetchUpdateProfile(profileData.mobile_number, profileData.email);
>>>>>>> 565cf6eadbd0abd81459b12f52680bbf04c222e5

        // if (response.success) {
        //     openSuccessModal("Your Profile was updated");
        //     getStudentProfile();
        // }
    }

    useEffect(() => {
        getStudentProfile();
    }, []);

    return (
        <>
            {successModalIsOpen && <FailedModal />}
            <div className="screenLayout">
                <StudentNav />

                <div className="title_contentDiv">
                    <span className="page-title">Student Profile</span>


                    <div className="outerDiv">
                        <StudentName />
                        <div className="inner_div_divider">
                            <Profile profile_data={studentProfile} />
                            <span className="inner_title">Affiliations</span>
                            <AffiliationTable />
                            <span className="italic_text">I hereby certify that all the information provided are true and correct to the best of my knowledge.</span>
                            <button onClick={updateProfile} className="maroonButton">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileStudent;

