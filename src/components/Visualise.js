import React, { useState } from "react";
import Table from "./Table";
import "../css/Visualise.css";

function Visualise() {
    const data = [];
    const [processData, setProcessData] = useState(data);

    return (
        <div className="visualise">
            <div className="infoContainer">
                <div className="scheduleAlgoContainer">
                    <h1>Scheduling Algorithms</h1>
                    <h3>Round Robin</h3>
                    <h3>First Come First Serves</h3>
                    <h3>Shortest Job First</h3>
                </div>
                <div className="algoTypeContainer">
                    <h1>Algorithm Type</h1>
                    <h3>I / O Bound</h3>
                    <h3>Preemptive</h3>
                </div>
            </div>
            <div className="tableContainer">
                <Table
                    processData={processData}
                    setProcessData={setProcessData}
                />
            </div>
        </div>
    );
}

export default Visualise;
