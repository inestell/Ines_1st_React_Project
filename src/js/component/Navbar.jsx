import React from "react";


function Navbar () {
    return (
        <nav className="navbar navbar-expand-sm text-bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-bg-dark" href="#">Start Bootstrap</a>
                <div className="navbar navbar-inverse bs-navbar-collapse ">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-white flex-end">
                            <li className="nav-link active text-bg-dark" aria-current="page" href="#">Home</li>        
                            <li className="nav-link text-bg-dark" href="#">About</li>
                            <li className="nav-link text-bg-dark" href="#">Services</li>
                            <li className="nav-link text-bg-dark" href="#">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;