import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

import useAuthenticatedStore from '../../hooks/useAuthenticatedStore'
import { checkAuthenticated, fetchLogout } from '../../functions/auth';

const pupLOGO = new URL("../images/PUPLOGO.png", import.meta.url)
const house = new URL("../images/House.png", import.meta.url)
const usercircle = new URL("../images/UserCircle.png", import.meta.url)


const StudentNav = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const navigate = useNavigate();

    const isAuthenticated = useAuthenticatedStore((state) => state.isAuthenticated);
    const authenticate = useAuthenticatedStore((state) => state.authenticate);
    const unAuthenticate = useAuthenticatedStore((state) => state.unAuthenticate);

    async function checkAuthenticationStatus() {
        const response = await checkAuthenticated();

        if (response.isAuthenticated === "error") {
            navigate('/');
        } else {

            authenticate();

            if (response.role === "EMPLOYEE") {
                navigate('/HomescreenEmployee');
            }
        }
    }

    async function logout() {
        const response = await fetchLogout();

        if (response.success) {
            unAuthenticate();
            navigate('/');
        }
    }

    useEffect(() => {
        if (!isAuthenticated) {
            checkAuthenticationStatus();
        }

    }, []);


    useEffect(() => {
        checkAuthenticationStatus();
    }, [isAuthenticated]);

    return (
        <div className="header">
            <div className="logo_textContainer">
                <img src={pupLOGO} className="headerLogo" />
                <span className="headerText">Student Deficiency Portal</span>
            </div>
            <div className="iconContainer">
            <img src={house} className="image2" onClick={() => {navigate('/HomescreenStudent');}}/>
                <div className="dropdown">
                    <img src={usercircle} className="userLogo" onClick={() => setOpenDropdown(!openDropdown)} />
                    {openDropdown && (
                        <div className="dropdown-menu">
                            <ul>

                                <li onClick={() => {
                                    navigate('/ProfileStudent');
                                }}> Profile</li>
                                <li onClick={() => {
                                    navigate('/PasswordStudent');
                                }}>Change Password</li>
                                <li onClick={logout}>Sign Out</li>

                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default StudentNav;