import React from "react";
import '../style.css';

import StudentNav from "./StudentNav"
import StudentName from "./StudentName";

const PasswordStudent = () => {

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

export default PasswordStudent;
