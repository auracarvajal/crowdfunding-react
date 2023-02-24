import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar">
            <h1>The Colombian Relief</h1>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/project">projects</Link>
            <Link to="/login" style= {{
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'               
            }}>Login</Link>
            </div>
        </nav>
    );
}

export default Nav;