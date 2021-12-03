import React from "react";
import "../css/ElabHome.css";
import { Link } from "react-router-dom";

const ElabHome = () => {
    return (
        <div className="ElabHome">
            <h1>Conceptual view of Scheduling Algorithm</h1>
            <div className="ElabCont">
                <Link to="/Elaborate/RR">
                    <button className="ca"> RR </button>
                </Link>
                <Link to="/Elaborate/FCFS">
                    <button className="cb"> FCFS </button>
                </Link>
                <Link to="/Elaborate/SJF">
                    <button className="cc"> SJF </button>
                </Link>
            </div>
        </div>
    );
};

export default ElabHome;
