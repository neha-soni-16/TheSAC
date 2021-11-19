import React, { useState } from "react";
import RR from "./RR";
import FCFS from "./FCFS";
import SJF from "./SJF";
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

    const [algorithm, setAlgorithm] = useState("rr");

    return (
        <div className="visualise">
            <div className="infoContainer">
                <div className="scheduleAlgoContainer">
                    <h1>Scheduling Algorithms</h1>
                    <h3
                        onClick={() => {
                            setAlgorithm("rr");
                            setChartData(chartDataInit);
                            setProcessSequence([]);
                            setProcessData([]);
                        }}
                    >
                        Round Robin
                    </h3>
                    <h3
                        onClick={() => {
                            setAlgorithm("fcfs");
                            setChartData(chartDataInit);
                            setProcessSequence([]);
                            setProcessData([]);
                        }}
                    >
                        First Come First Serves
                    </h3>
                    <h3
                        onClick={() => {
                            setAlgorithm("sjf");
                            setChartData(chartDataInit);
                            setProcessSequence([]);
                            setProcessData([]);
                        }}
                    >
                        Shortest Job First
                    </h3>
                </div>
                <div className="algoTypeContainer">
                    <h1>Algorithm Type</h1>
                    <h3>I / O Bound</h3>
                    <h3>Preemptive</h3>
                </div>
            </div>
            <div className="tableContainer">
                {algorithm == "fcfs" ? (
                    <FCFS
                        processData={processData}
                        setProcessData={setProcessData}
                        chart={chart}
                        setchart={setchart}
                        chartData={chartData}
                        setChartData={setChartData}
                        processSequence={processSequence}
                        setProcessSequence={setProcessSequence}
                    />
                ) : algorithm == "rr" ? (
                    <RR
                        processData={processData}
                        setProcessData={setProcessData}
                        processSequence={processSequence}
                        setProcessSequence={setProcessSequence}
                        chart={chart}
                        setchart={setchart}
                        chartData={chartData}
                        setChartData={setChartData}
                    />
                ) : (
                    <SJF />
                )}
            </div>
        </div>
    );
}

export default Visualise;
