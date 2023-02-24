import React, {useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

import useAuthenticatedStore from '../../hooks/useAuthenticatedStore'
import {checkAuthenticated} from '../../functions/auth';

const pupLOGO = new URL("../images/PUPLOGO.png", import.meta.url)
const house = new URL("../images/House.png", import.meta.url)
const usercircle = new URL("../images/UserCircle.png", import.meta.url)


const StudentNav = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const navigate = useNavigate();

    const isAuthenticated = useAuthenticatedStore((state) => state.isAuthenticated);
    const authenticate = useAuthenticatedStore((state) => state.authenticate);

    useEffect(() => {
        async function checkAuthenticationStatus() {
            const response = await checkAuthenticated();

            if (response.isAuthenticated === "error") {
                navigate('/');
            } else {
                authenticate();
            }
        }

        if (!isAuthenticated) {
            checkAuthenticationStatus();
        }
        
        
    }, []);

    return (
        <div className="header">
            <img src={pupLOGO} className="pupLogo2" />
            <span className="home-text9">Student Deficiency Portal</span>
            <img src={house} className="image2" onClick={() => {navigate('/HomescreenStudent');}}/>
            <div className="dropdown">
                <img src={usercircle} className="image3" onClick={() => setOpenDropdown(!openDropdown)} />
                {openDropdown && (
                    <div className="dropdown-menu">
                        <ul>

                            <li onClick={() => {
                                navigate('/ProfileStudent');
                            }}> Profile</li>
                            <li onClick={() => {
                                navigate('/PasswordStudent');
                            }}>Change Password</li>
                            <li>Sign Out</li>

                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default StudentNav;