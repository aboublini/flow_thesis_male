import React from 'react';
import './NotesComponentStyle.css'
import notesVideo from '../visual-material/NotesBackround.mp4';
import lifeVideo from "../visual-material/LifeBackround.mp4";


const NotesComponent = () => {

     return (
        <div className="notes-container">

            <video autoPlay loop muted id="notes-image" >
                <source src={notesVideo} type="video/mp4"/>
            </video>

            <div className="notes-content">
                <div className="notes-title">
                    <h2>All your notes in one place.</h2>
                    <p>Take notes anytime, anywhere.</p>
                </div>
            </div>
        </div>
    );
};

export default NotesComponent;