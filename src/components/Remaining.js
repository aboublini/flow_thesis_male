import React from 'react';
import {RxDoubleArrowRight} from "react-icons/rx";

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