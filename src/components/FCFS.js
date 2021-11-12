import React from "react";
import Table from "./Table";

const FCFS = (props) => {
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
        for (let i = 0; i < processLen; i++) {
            turnArTime[i] = parseInt(processData[i].BurstTime) + waitTime[i];
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

        for (let i = 0; i < processLen; i++) {
            totalWaitTime = totalWaitTime + waitTime[i];
            totalTurnArTime = totalTurnArTime + turnArTime[i];
        }

        let avgTurnArTime = totalWaitTime / processLen;
        let avgWaitTime = Math.floor(totalTurnArTime / processLen);
    };

    return (
        <div className="fcfs">
            <Table
                processData={props.processData}
                setProcessData={props.setProcessData}
            />
            <button onClick={() => calculateFCFS(props.processData)}>
                submit
            </button>
        </div>
    );
};

export default FCFS;
