import React, { useState } from "react";
import Table from "./Table";
import Timeline from "./Timeline";
import OutputTable from "./OutputTable";

const RR = (props) => {
    const [waitingTime, setWaitTime] = useState([]);
    const [turnAroundTime, setTurnArTime] = useState([]);

    const findWaitingTime = (processData, processLen, waitTime, quantum) => {
        let remainingBurstTime = new Array(processLen).fill(0);
        for (let i = 0; i < processLen; i++)
            remainingBurstTime[i] = parseInt(processData[i].BurstTime);

        let time = 0;
        props.setProcessSequence([]);

        while (true) {
            let processesCompleted = true;

            for (let i = 0; i < processLen; i++) {
                if (remainingBurstTime[i] > 0) {
                    processesCompleted = false;

                    const temp = [];
                    temp.push(processData[i].ProcessId.toString());
                    temp.push(time);

                    if (remainingBurstTime[i] > quantum) {
                        time = time + quantum;
                        remainingBurstTime[i] -= quantum;
                    } else {
                        time = time + remainingBurstTime[i];
                        waitTime[i] = time - parseInt(processData[i].BurstTime);
                        remainingBurstTime[i] = 0;
                    }

                    temp.push(time);
                    props.setProcessSequence((processSequence) => [
                        ...processSequence,
                        temp,
                    ]);
                }
            }
            if (processesCompleted === true) break;
        }
    };

    const findTurnAroundTime = (
        processData,
        processLen,
        waitTime,
        turnArTime
    ) => {
        for (let i = 0; i < processLen; i++)
            turnArTime[i] = parseInt(processData[i].BurstTime) + waitTime[i];
    };

    const findavgTime = (processData, quantum) => {
        let processLen = processData.length;

        let waitTime = new Array(processLen).fill(0),
            turnArTime = new Array(processLen).fill(0);
        let totalWaitTime = 0,
            totalTurnArTime = 0;

        findWaitingTime(processData, processLen, waitTime, quantum);
        findTurnAroundTime(processData, processLen, waitTime, turnArTime);

        for (let i = 0; i < processLen; i++) {
            totalWaitTime = totalWaitTime + waitTime[i];
            totalTurnArTime = totalTurnArTime + turnArTime[i];
        }

        setWaitTime(waitTime);
        setTurnArTime(turnArTime);

        props.setchart((chart) => !chart);
    };

    const handleCalculate = (event) => {
        event.preventDefault();
        let quantum = parseInt(event.target.timeQuantum.value);
        findavgTime(props.processData, quantum);
    };

    return (
        <div className="rr">
            <Table
                processData={props.processData}
                setProcessData={props.setProcessData}
            />

            <form onSubmit={handleCalculate}>
                <input
                    type="number"
                    name="timeQuantum"
                    placeholder="Time Quantum"
                    min="0"
                    required="required"
                />
                <button>Calculate</button>
            </form>

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
                        chart={props.chart}
                        chartData={props.chartData}
                        setChartData={props.setChartData}
                        processSequence={props.processSequence}
                    />
                </div>
            )}
        </div>
    );
};

export default RR;
