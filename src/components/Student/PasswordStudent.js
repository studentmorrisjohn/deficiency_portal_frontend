import React, {useState, useEffect } from 'react'
import '../style.css';

import StudentNav from "./StudentNav"
import StudentName from "./StudentName";
import { fetchChangePassword } from '../../functions/auth';

const PasswordStudent = () => {

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
            console.log("password changed");
        }
    }

    return (
        <>
            <div className="container2">
                <StudentNav />
                <div className="container3">
                    <span className="home-text10">Change Password</span>
                </div>
                                    
                <div className="container10">
                    <StudentName />
                </div>
                <div className="container11">
                        <input type='password' name='old_pass' onChange={onChange} placeholder="Old Password" className="textinput2" />
                        <input type='password' name='new_pass' onChange={onChange} placeholder="New Password" className="textinput2" />
                        <input type='password' name='re_new_pass' onChange={onChange} placeholder="Confirm Password" className="textinput2" />
                </div>
                <div className="container10">
                        <button className="home-button3" onClick={changePassword}>Change Password</button>
                </div>     
                
            </div>

        </>
    )
}

export default PasswordStudent;
