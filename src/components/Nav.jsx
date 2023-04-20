import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {

    const [profileData, setProfileData] = useState([]);

    const isLogIn = window.localStorage.getItem("token") !== null;
    const username = window.localStorage.getItem("username") || "";
    const navigate = useNavigate();

    useEffect(() => {
            fetch(`${import.meta.env.VITE_API_URL}users/`)
            .then((profileResults) => {
                return profileResults.json();
            })
            .then((data) => {
                const userProfile = data.find((profile)=>profile.username===username)
                setProfileData(userProfile);
            });
    }, [username]);


    const onLogOut = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <nav className="navbar">
            <img src="/images/transparent-logo.png" />
            <h1>The Colombian Relief</h1>
            <div className="links">
            {!isLogIn && <Link to="/">Home</Link>}
            {isLogIn && <Link to="/createproject">Create Project</Link>}          
            {!isLogIn && <Link to="/login" style= {{
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'               
            }}>Login</Link>}
             {!isLogIn && <Link to="/signup" style= {{
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'               
            }}>SignUp</Link>} 
             {isLogIn && <Link className='secondary-btn' to="/" onClick={onLogOut}>Log out</Link>}          
            </div>
        </nav>
    );
}

export default Nav;