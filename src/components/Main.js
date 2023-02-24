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
                    <span className="home-text">Welcome, PUPian!</span>
                    <span className="hom-text2">Click or Tap in which group you belong</span>
                    <button className="home-button" onClick={() => {setGoToStudentLogin(true);}}>
                        Student
                    </button>
                    <button className="home-button1" onClick={() => {setGoToFacultyLogin(true);}}>
                         Employee
                    </button>
                    <span className="home-text3">By using this service, you understood and agree to the <br />
                    PUP Online Services <span className="home-text4">Terms of Use</span> and <span className="home-text4">Privacy Statement</span></span>
                </div>
            </div>
        </>
    )
}

export default Main;