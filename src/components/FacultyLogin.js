import "./style.css"
import React from "react"

const pupLOGO = new URL("./images/PUPLOGO.png", import.meta.url)
const key = new URL("./images/Key.png", import.meta.url)

const FacultyLogin = () => {
    return (
        <>
            <div className="pupBG">
                <div className="pupside">
                    <img src={pupLOGO} className="pupLogo" />
                    <span className="home-text5">PUP Student Deficiency Portal</span>
                    <span className="home-text6">Sign in to start your session</span>
                    <input type='text' placeholder="Username" className="textinput" />
                    <input type='password' placeholder="Password" className="textinput1" />
                    <div className="container">
                        <img src={key} className="image1" />
                        <span className="home-text7"> Forgot Password </span>
                    </div>
                    <button className="home-button2">
                        Sign in
                    </button>
                    <span className="home-text8">By using this service, you understood and agree to the <br />
                        PUP Online Services <span className="home-text4">Terms of Use</span> and <span className="home-text4">Privacy Statement</span></span>
                </div>
            </div>
        </>
    )

}

export default FacultyLogin;