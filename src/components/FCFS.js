import React, { useState } from "react";
import Table from "./Table";
import Timeline from "./Timeline";
import OutputTable from "./OutputTable";

let turnAround = [];

const FCFS = (props) => {
    const [waitingTime, setWaitTime] = useState([]);
    const [turnAroundTime, setTurnArTime] = useState([]);

    const findWaitingTime = (processData, processLen, waitTime) => {
        waitTime[0] = 0;
        for (let i = 1; i < processLen; i++) {
            waitTime[i] =
                parseInt(processData[i - 1].BurstTime) + waitTime[i - 1];
        }
    };

    const findTurnAroundTime = (
        processData,
        processLen,
        turnArTime,
        waitTime
    ) => {
        turnAround = [];
        for (let i = 0; i < processLen; i++) {
            turnArTime[i] = parseInt(processData[i].BurstTime) + waitTime[i];
            turnAround.push(turnArTime[i]);
        }
    };

    const calculateFCFS = (processData) => {
        let processLen = processData.length;
        let waitTime = new Array(processLen),
            turnArTime = new Array(processLen);

        for (let i = 0; i < processLen; i++) {
            waitTime[i] = 0;
            turnArTime[i] = 0;
        }

        let totalWaitTime = 0,
            totalTurnArTime = 0;

        findWaitingTime(processData, processLen, waitTime);
        findTurnAroundTime(processData, processLen, turnArTime, waitTime);

        setWaitTime(waitTime);
        setTurnArTime(turnArTime);

        let start = 0;
        let end = 0;
        props.setProcessSequence([]);

        for (let i = 0; i < processLen; i++) {
            totalWaitTime = totalWaitTime + waitTime[i];
            totalTurnArTime = totalTurnArTime + turnArTime[i];
            const temp = [];
            temp.push(processData[i].ProcessId.toString());
            temp.push(start);
            temp.push(turnArTime[i]);

            start = turnArTime[i];
            end = end + turnArTime[i];
            props.setProcessSequence((processSequence) => [
                ...processSequence,
                temp,
            ]);
        }

        let avgTurnArTime = totalWaitTime / processLen;
        let avgWaitTime = Math.floor(totalTurnArTime / processLen);
        props.setchart((chart) => !chart);
    };

    return (
        <div className="fcfs">
            <Table
                processData={props.processData}
                setProcessData={props.setProcessData}
            />
            <button onClick={() => calculateFCFS(props.processData)}>
                Calculate
            </button>

            {props.chart && (
                <div>
                    <h1>Output Table</h1>
                    <OutputTable
                        processData={props.processData}
                        waitTime={waitingTime}
                        turnArTime={turnAroundTime}
                    />
                    <h1>Gantt Chart</h1>
                    <Timeline
                        style={{ display: "inline" }}
                        chartData={props.chartData}
                        setChartData={props.setChartData}
                        processSequence={props.processSequence}
                    />
                </div>
            )}
        </div>
    );
};

export default FCFS;
