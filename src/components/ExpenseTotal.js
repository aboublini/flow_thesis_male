import React from 'react';

const ExpenseTotal = ({ total }) => {

    return (
        <div className="alert alert-primary">
            <span>Spent so far: </span>
            <br/>
            <span className="el"><b>{total}€</b></span>
        </div>
    );
};

export default ExpenseTotal;