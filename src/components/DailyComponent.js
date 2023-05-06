import React from 'react';
import './DailyComponentStyle.css'
import dailyVideo from '../visual-material/DailyBackround.mp4';
import Logo from "../visual-material/logo.png";

const DailyComponent = () => {
    
    return (
        <div className="daily-container">

            <video autoPlay loop muted id="daily-image" >
                <source src={dailyVideo} type="video/mp4"/>
            </video>

            <div className="daily-content">
                <div className="daily-title">
                    <h2>What is your main goal for today?</h2>
                    <p>Stress less. Organize more.</p>
                    <br/>
                    <img src={Logo} className="lg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default DailyComponent;