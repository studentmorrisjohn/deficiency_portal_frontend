import "./style.css"
import { Navigate } from 'react-router-dom'
import React from "react"

const pupLOGO = new URL("./images/PUPLOGO.png", import.meta.url)

const Main = () => {
    const [goToStudentLogin, setGoToStudentLogin] = React.useState(false);
    const [goToFacultyLogin, setGoToFacultyLogin] = React.useState(false);

    if (goToStudentLogin) {
        return <Navigate to="/StudentLogin" />
    }

    if (goToFacultyLogin) {
        return <Navigate to="/FacultyLogin" />
    }

    return (
        <>
            <div className="pupBG">

                <div className="pupside">
                    <img src={pupLOGO} className="pupLogo" />
                    <span className="main_heading">Welcome, PUPian!</span>
                    <span className="subtext_main">Click or Tap in which group you belong</span>
                    <button className="btn_stdnt" onClick={() => {setGoToStudentLogin(true);}}>
                        Student
                    </button>
                    <button className="btn_emply" onClick={() => {setGoToFacultyLogin(true);}}>
                         Employee
                    </button>
                    <span className="subtext_main_bottom">By using this service, you understood and agree to the
                    PUP Online Services <span className="subtext_blue">Terms of Use</span> and <span className="subtext_blue">Privacy Statement</span></span>
                </div>
            </div>
        </>
    )
}

export default Main;