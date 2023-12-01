import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="/img/logo.png" alt="Logo" width="100%" onClick={() => navigate('/')} style={{cursor:"pointer"}}/>
                </div>
                <div className="navbar-container">
                    <div style={{ display: "flex", alignSelf: "center" }}>
                        <ul className="navbar-links">
                            <li className="navbar-link">
                                <Link to="chatbot" smooth duration={1500}>ChatBot</Link>
                            </li>
                            <li className="navbar-link">
                                <Link to="features" smooth duration={1500}>Features</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
