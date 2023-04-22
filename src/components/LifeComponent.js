import React from 'react';
import './LifeComponentStyle.css'
import lifeVideo from "../visual-material/LifeBackround.mp4";

const LifeComponent = () => {
    return (
        <div className="life-container">

            <video autoPlay loop muted id="life-image" >
                <source src={lifeVideo} type="video/mp4"/>
            </video>

            <div className="life-content">
                <div className="life-title">
                    <h1>Budgeting is easier with flow.</h1>
                    <p>Simple. Easy. Responsible.</p>
                </div>
            </div>
        </div>
    );
};

export default LifeComponent;