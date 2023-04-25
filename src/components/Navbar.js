import React, {useState} from 'react';
import './NavbarStyle.css';
import {Link} from 'react-router-dom';
import {FaBars, FaGithub, FaTimes} from "react-icons/fa";
import Logo from "../visual-material/logo-full.png";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
    // Set nav
    const [Click, setClick] = useState(false);
    const handleClick = () => setClick(!Click);


    return (
        <div className={'header'}>
            <Link to="/home"><img src={Logo} className="nav-logo" alt=""/></Link>
            <ul className={Click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/home" className="nav-route">Home</Link>
                </li>
                <li>
                    <Link to="/daily">Daily Goals</Link>
                </li>
                <li>
                    <Link to="/life">Budget Manager</Link>
                </li>
                <li>
                    <Link to="/notes">Notes</Link>
                </li>
                <li className="dropdown">
                    <button className="dropbtn">More <MdArrowDropDown size={18} style={{color: '#fff'}}/></button>
                    <div className="dropdown-content">
                        <Link to="/help">FAQs</Link>
                        <Link to="/">Logout</Link>
                    </div>
                </li>
                <li className="burger">
                    <Link to="/help">FAQs</Link>
                </li>
                <li className="burger">
                    <Link to="/">Logout <RiLogoutBoxRFill size={18} style={{color: '#fff'}}/></Link>

                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {Click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}}/>)}


            </div>

            <div className="logout">
                <li>
                    <Link to="/">Logout <RiLogoutBoxRFill size={18} style={{color: '#fff'}}/></Link>

                </li>
            </div>
        </div>
    );
};

export default Navbar;