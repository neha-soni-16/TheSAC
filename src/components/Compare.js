import React, { useState } from "react";
import RR from "./RR";
import FCFS from "./FCFS";
import SJF from "./SJF";
import Table from "./Table";
import Comp from "./Comp";

function Compare() {
    const data = [];
    const [processData, setProcessData] = useState(data);

    const chartDataInit = [
        [
            { type: "string", id: "processId" },
            { type: "number", id: "Start" },
            { type: "number", id: "End" },
        ],
    ];

    const [chartF, setchartF] = useState(false);
    const [chartR, setchartR] = useState(false);
    const [chartS, setchartS] = useState(false);
    const [chartDataF, setChartDataF] = useState(chartDataInit);
    const [chartDataR, setChartDataR] = useState(chartDataInit);
    const [chartDataS, setChartDataS] = useState(chartDataInit);

    const [processSequenceF, setProcessSequenceF] = useState(data);
    const [processSequenceR, setProcessSequenceR] = useState(data);
    const [processSequenceS, setProcessSequenceS] = useState(data);

    const [algorithm, setAlgorithm] = useState("rr");
    return (
        <div className="compare">
            <h1> Compare Algorithms </h1>

            {/* <Table processData={processData} setProcessData={setProcessData} /> */}
            {/* <button onClick={() => calculateFCFS(props.processData)}>
                Calculate
            </button> */}

            <div className="tableContainer">
                <Comp
                    processData={processData}
                    setProcessData={setProcessData}
                    processSequenceF={processSequenceF}
                    setProcessSequenceF={setProcessSequenceF}
                    chartF={chartF}
                    setchartF={setchartF}
                    chartDataF={chartDataF}
                    setChartDataF={setChartDataF}
                    processData={processData}
                    setProcessData={setProcessData}
                    processSequenceS={processSequenceS}
                    setProcessSequenceF={setProcessSequenceS}
                    chartS={chartS}
                    setchartS={setchartS}
                    chartDataS={chartDataS}
                    setChartDataS={setChartDataS}
                    processData={processData}
                    setProcessData={setProcessData}
                    processSequenceR={processSequenceR}
                    setProcessSequenceR={setProcessSequenceR}
                    chartR={chartR}
                    setchartR={setchartR}
                    chartDataR={chartDataR}
                    setChartDataF={setChartDataR}
                />
            </div>
        </div>
    );
}

export default Compare;
