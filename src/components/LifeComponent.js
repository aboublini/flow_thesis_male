import React from 'react';
import './LifeComponentStyle.css'
import lifeVideo from "../visual-material/LifeBackround.mp4";
import Logo from "../visual-material/logo.png";

const LifeComponent = () => {
    return (
        <div className="life-container">

            <video autoPlay loop muted id="life-image" >
                <source src={lifeVideo} type="video/mp4"/>
            </video>

            <div className="life-content">
                <div className="life-title">
                    <h2>Budgeting is now easier with flow.</h2>
                    <p>Simple. Easy. Responsible.</p>
                    <br/>
                    <img src={Logo} className="lg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default LifeComponent;