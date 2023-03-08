import React, { useState, useEffect } from 'react'
import '../style.css';

import SuccessModal from "../Modals/SuccessModal";
import EmployeeNav from "./EmployeeNav";

import { fetchChangePassword } from '../../functions/auth';
import useSuccessModalStore from "../../hooks/useSuccessModalStore";

const PasswordEmployee = () => {
    const successModalIsOpen = useSuccessModalStore((state) => state.isOpen);
    const openSuccessModal = useSuccessModalStore((state) => state.openSuccessModal);

    const [formData, setFormData] = useState({
        old_pass: "",
        new_pass: "",
        re_new_pass: ""
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    async function changePassword() {
        const response = await fetchChangePassword(formData.old_pass, formData.new_pass, formData.re_new_pass);

        console.log(response);

        if (response.success) {
            openSuccessModal("Your password was changed");
        }
    }

    return (
        <>
            {successModalIsOpen && <SuccessModal />}
            <div className="screenLayout">
                <EmployeeNav />
                <div className="title_contentDiv_Auto">
                    <span className="page-title">Change Password</span>
                    <div className="outerDiv">
                    <div className="password_div">
                        <input type='password' name='old_pass' onChange={onChange} placeholder="Old Password" className="changepass_input" />
                        <input type='password' name='new_pass' onChange={onChange} placeholder="New Password" className="changepass_input" />
                        <input type='password' name='re_new_pass' onChange={onChange} placeholder="Confirm Password" className="changepass_input" />
                    </div>
                    <div className="password_div2">
                        <button className="maroonButton" onClick={changePassword}>Change Password</button>
                    </div>    
                    </div>
                </div>
            </div>

        </>
    )
}

export default PasswordEmployee;
