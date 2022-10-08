import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";

function Navbar() {
    const [active, setActive] = useState(null)
    return (
        <>
            <div className="mainNavBar">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" href="#">
                            <img src="/assets/images/cubedotslogo/cubedots_logo.png" height="28" />
                        </Link>
                        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarMenu">
                                <li className="nav-item">
                                    <NavLink className="nav-link home" href="home">Home </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" href="#">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" href="#">Why Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" href="#">Projects</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" href="#">Contact Us</NavLink>
                                </li>
                            </ul>
                            <ul className="signNavbar">
                                <li className="nav-item">
                                    <a className="nav-link signBtn" href="#">Sign In</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>



                {/* <nav className="navbar navbar-expand-lg">
                    <div className="portalNavbar">
                        <div>
                            <a className="navbar-brand" href="#">
                                <img src="/assets/images/cubedotslogo/cubedots_logo.png" height="28" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="navbarMenu">
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Why Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Projects</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <ul className="signNavbar">
                                <li className="nav-item">
                                    <a className="nav-link signBtn" href="#">Sign In</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
            </div>
        </>
    )
}
export default Navbar;