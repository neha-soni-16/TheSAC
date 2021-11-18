import React, { useState } from "react";
import RR from "./RR";
import FCFS from "./FCFS";
import "../css/Visualise.css";

function Visualise() {
    const data = [];
    const [processData, setProcessData] = useState(data);

    const chartDataInit = [
        [
            { type: "string", id: "processId" },
            { type: "number", id: "Start" },
            { type: "number", id: "End" },
        ],
    ];

    const [chart, setchart] = useState(false);
    const [chartData, setChartData] = useState(chartDataInit);

    const [processSequence, setProcessSequence] = useState(data);

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
                {/* <RR processData={processData} setProcessData={setProcessData} /> */}
                <FCFS
                    processData={processData}
                    setProcessData={setProcessData}
                    chart={chart}
                    setchart = {setchart}
                    chartData={chartData}
                    setChartData={setChartData}
                    processSequence={processSequence}
                    setProcessSequence={setProcessSequence}
                />
            </div>
        </div>
    );
}

export default Visualise;
