import React from "react";
import '../style.css'
import { useState, useEffect } from "react";
import EmployeeNav from './EmployeeNav.js'
import {fetchEmployeeProfile, fetchUpdateProfile} from '../../functions/employee';
import Profile from "../General/Profile";
import SuccessModal from "../Modals/SuccessModal";
import useProfileDataStore from "../../hooks/useProfileDataStore";
import useSuccessModalStore from "../../hooks/useSuccessModalStore";

const ProfileEmployee = () => {

    const profileData = useProfileDataStore((state) => state.profileData);
    const successModalIsOpen = useSuccessModalStore((state) => state.isOpen);
    const openSuccessModal = useSuccessModalStore((state) => state.openSuccessModal);

    const [employeeProfile, setEmployeeProfile] = useState(
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

    async function getEmployeeProfile() {
        const response = await fetchEmployeeProfile();

        setEmployeeProfile(response);
    }

    async function updateProfile() {
        const response = await fetchUpdateProfile(profileData.mobile_number, profileData.email);

        if (response.success) {
            openSuccessModal("Your Profile was updated");
            getEmployeeProfile();
        }
    }

    useEffect(() => {
        getEmployeeProfile();
    }, []);
    
    return (
        <>
            {successModalIsOpen && <SuccessModal />}
            <div className="screenLayout">
                <EmployeeNav />

                <div className="title_contentDiv">
                    <span className="page-title">Student Profile</span>


                    <div className="outerDiv">

                            <Profile profile_data={employeeProfile} />
                            <span className="italic_text">I hereby certify that all the information provided are true and correct to the best of my knowledge.</span>
                            <button onClick={updateProfile} className="maroonButton">Save</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileEmployee;