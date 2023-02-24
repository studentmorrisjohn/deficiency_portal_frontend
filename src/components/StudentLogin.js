import "./style.css"
import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import {login, checkAuthenticated} from '../functions/auth'
import useAuthenticatedStore from '../hooks/useAuthenticatedStore'

const pupLOGO = new URL("./images/PUPLOGO.png", import.meta.url)
const key = new URL("./images/Key.png", import.meta.url)

const StudentLogin = () => {
    const isAuthenticated = useAuthenticatedStore((state) => state.isAuthenticated);
    const authenticate = useAuthenticatedStore((state) => state.authenticate);
    const navigate = useNavigate();

    useEffect(() => {
        async function checkAuthenticationStatus() {
            const response = await checkAuthenticated();
            
            if (response.isAuthenticated === "success") {
                authenticate();
            }
        }

        if (!isAuthenticated) {
            checkAuthenticationStatus();
        }
    }, []);

    useEffect(()=> {
        if (isAuthenticated) {
            navigate('/HomescreenStudent');
        }
    });

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        attemptLogin(username, password);
    };

    const attemptLogin = (username, password) => {
        login(username, password).then((res) => {
            if (res.status === 202) {
                authenticate();
            }
            else {
                console.log("something went wrong");
            }
        });
    }

    return (
        <>
            <div className="pupBG">
                <form onSubmit={e => onSubmit(e)}>
                    <div className="pupside">
                        <img src={pupLOGO} className="pupLogo" />
                        <span className="home-text5">PUP Student Deficiency Portal</span>
                        <span className="home-text6">Sign in to start your session</span>
                        <input name="username" type='text' placeholder="Student Number" className="textinput" onChange={e => onChange(e)} />
                        <input name="password" type='password' placeholder="Password" className="textinput1" onChange={e => onChange(e)} />
                        <div className="container">
                            <img src={key} className="image1" />
                            <span className="home-text7"> Forgot Password </span>
                        </div>
                        <button className="home-button2" type="submit">
                            Sign in
                        </button>
                        <span className="home-text8">By using this service, you understood and agree to the <br />
                            PUP Online Services <span className="home-text4">Terms of Use</span> and <span className="home-text4">Privacy Statement</span></span>
                    </div>
                </form>
            </div>
        </>
    )

}

export default StudentLogin;