import React from 'react';

const Remaining = ({ remain }) => {
    return (
        <div className="alert alert-success">
            <span>Remaining:</span>
            <br/>
            <span className="el"><b>{remain}€</b></span>
        </div>
    );
};

export default Remaining;