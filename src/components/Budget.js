import React from 'react';

const Budget = ({ handleBudgetChange, budget }) => {

    return (
        <div className="alert alert-secondary">
            <span>Budget: </span>
            <br/>
            <span className="el"><b>{budget}€</b></span>
        </div>
    );
};

export default Budget;