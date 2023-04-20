import React from 'react';
import './HomeComponentStyle.css'
import homeVideo from '../visual-material/HomeBackround.mp4';
import Logo from "../visual-material/logo.png";
import {Link} from "react-router-dom";

const HomeComponent = () => {
    return (
        <div className="container">
            <div className="left-vid">
                <video autoPlay loop muted id="video" >
                    <source src={homeVideo} type="video/mp4"/>
                </video>
            </div>

            <div className="content">
                <div className="welcome">
                    <img src={Logo} className="home-img" alt=""/>
                    <h2>Take your life into your own hands.</h2>
                    <button className="more"><Link to="/help">LEARN MORE</Link></button>
                </div>


            </div>


        </div>
    );
};

export default HomeComponent;