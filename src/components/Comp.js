import React, { useState } from "react";
import Table from "./Table";
import Timeline from "./Timeline";
import OutputTable from "./OutputTable";

let turnAroundF = [];

const Comp = (props) => {
    const [waitingTimeF, setWaitTimeF] = useState([]);
    const [turnAroundTimeF, setTurnArTimeF] = useState([]);
    const [waitingTimeS, setWaitTimeS] = useState([]);
    const [turnAroundTimeS, setTurnArTimeS] = useState([]);
    const [waitingTimeR, setWaitTimeR] = useState([]);
    const [turnAroundTimeR, setTurnArTimeR] = useState([]);

    const findWaitingTimeF = (processData, processLen, waitTime) => {
        waitTime[0] = 0;
        for (let i = 1; i < processLen; i++) {
            waitTime[i] =
                parseInt(processData[i - 1].BurstTime) + waitTime[i - 1];
        }
    };

    const findTurnAroundTimeF = (
        processData,
        processLen,
        turnArTime,
        waitTime
    ) => {
        turnAroundF = [];
        for (let i = 0; i < processLen; i++) {
            turnArTime[i] = parseInt(processData[i].BurstTime) + waitTime[i];
            turnAroundF.push(turnArTime[i]);
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

        findWaitingTimeF(processData, processLen, waitTime);
        findTurnAroundTimeF(processData, processLen, turnArTime, waitTime);

        setWaitTimeF(waitTime);
        setTurnArTimeF(turnArTime);

        let start = 0;
        let end = 0;
        props.setProcessSequenceF([]);

        for (let i = 0; i < processLen; i++) {
            totalWaitTime = totalWaitTime + waitTime[i];
            totalTurnArTime = totalTurnArTime + turnArTime[i];
            const temp = [];
            temp.push(processData[i].ProcessId.toString());
            temp.push(start);
            temp.push(turnArTime[i]);

            start = turnArTime[i];
            end = end + turnArTime[i];
            props.setProcessSequenceF((processSequence) => [
                ...processSequence,
                temp,
            ]);
        }

        let avgTurnArTime = totalWaitTime / processLen;
        let avgWaitTime = Math.floor(totalTurnArTime / processLen);
        props.setchartF((chart) => !chart);
    };

    const findWaitingTimeS = (processData, n, wt) => {
        let rem_bt = new Array(n).fill(0);
        for (let i = 0; i < n; i++)
            rem_bt[i] = parseInt(processData[i].BurstTime);
        let complete = 0,
            t = 0,
            minm = Number.MAX_VALUE;
        let shortest = 0,
            finish_time;
        let check = false;

        while (complete !== n) {
            for (let i = 0; i < n; i++) {
                if (
                    processData[i].ArrivalTime <= t &&
                    rem_bt[i] < minm &&
                    rem_bt[i] > 0
                ) {
                    minm = rem_bt[i];
                    shortest = i;
                    check = true;
                }
            }

            if (check === false) {
                t++;
                continue;
            }
            rem_bt[shortest]--;
            minm = rem_bt[shortest];
            if (minm === 0) {
                minm = Number.MAX_VALUE;
            }
            if (rem_bt[shortest] === 0) {
                complete++;
                check = false;
                finish_time = t + 1;
                wt[shortest] =
                    finish_time -
                    processData[shortest].BurstTime -
                    processData[shortest].ArrivalTime;
                if (wt[shortest] < 0) {
                    wt[shortest] = 0;
                }
            }
            t++;
        }
    };

    const findTurnAroundTimeS = (processData, n, wt, tat) => {
        for (let i = 0; i < n; i++)
            tat[i] = parseInt(processData[i].BurstTime) + wt[i];
    };

    const findavgTimeS = (processData) => {
        let n = processData.length;

        let wt = new Array(n).fill(0),
            tat = new Array(n).fill(0);
        let total_wt = 0,
            total_tat = 0;

        findWaitingTimeS(processData, n, wt);
        findTurnAroundTimeS(processData, n, wt, tat);

        setWaitTimeS(wt);
        setTurnArTimeS(tat);

        let start = 0;
        let end = 0;
        props.setProcessSequenceS([]);

        for (let i = 0; i < n; i++) {
            total_wt = total_wt + wt[i];
            total_tat = total_tat + tat[i];

            const temp = [];
            temp.push(processData[i].ProcessId.toString());
            temp.push(start);
            temp.push(tat[i]);

            start = tat[i];
            end = end + tat[i];
            props.setProcessSequenceS((processSequence) => [
                ...processSequence,
                temp,
            ]);
        }

        props.setchartS((chart) => !chart);
    };

    const handleCalculateS = (event) => {
        event.preventDefault();
        //let quantum = parseInt(event.target.timeQuantum.value);

        findavgTimeS(props.processData);
    };

    const findWaitingTimeR = (processData, processLen, waitTime, quantum) => {
        let remainingBurstTime = new Array(processLen).fill(0);
        for (let i = 0; i < processLen; i++)
            remainingBurstTime[i] = parseInt(processData[i].BurstTime);

        let time = 0;
        props.setProcessSequenceR([]);

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
                    props.setProcessSequenceR((processSequence) => [
                        ...processSequence,
                        temp,
                    ]);
                }
            }
            if (processesCompleted === true) break;
        }
    };

    const findTurnAroundTimeR = (
        processData,
        processLen,
        waitTime,
        turnArTime
    ) => {
        for (let i = 0; i < processLen; i++)
            turnArTime[i] = parseInt(processData[i].BurstTime) + waitTime[i];
    };

    const findavgTimeR = (processData, quantum) => {
        let processLen = processData.length;

        let waitTime = new Array(processLen).fill(0),
            turnArTime = new Array(processLen).fill(0);
        let totalWaitTime = 0,
            totalTurnArTime = 0;

        findWaitingTimeR(processData, processLen, waitTime, quantum);
        findTurnAroundTimeR(processData, processLen, waitTime, turnArTime);

        for (let i = 0; i < processLen; i++) {
            totalWaitTime = totalWaitTime + waitTime[i];
            totalTurnArTime = totalTurnArTime + turnArTime[i];
        }

        setWaitTimeR(waitTime);
        setTurnArTimeR(turnArTime);
        console.log("hh", waitTime);

        props.setchartR((chart) => !chart);
    };

    const handleCalculateR = (event) => {
        event.preventDefault();
        let quantum = parseInt(event.target.timeQuantum.value);
        findavgTimeR(props.processData, quantum);
    };

    return (
        <div className="rr">
            <Table
                processData={props.processData}
                setProcessData={props.setProcessData}
            />

            <form
                onSubmit={() => {
                    handleCalculateR();
                    // handleCalculateS();
                    // calculateFCFS(props.processData);
                }}
            >
                <input
                    type="number"
                    name="timeQuantum"
                    placeholder="Time Quantum"
                    min="0"
                    required="required"
                />
                <button>Calculate</button>
            </form>

            {props.chartR && (
                <div>
                    <h1>Output Table</h1>
                    <OutputTable
                        processData={props.processData}
                        waitTime={waitingTimeR}
                        turnArTime={turnAroundTimeR}
                    />
                    <h1>Gantt Chart</h1>
                    <Timeline
                        chart={props.chartR}
                        chartData={props.chartDataR}
                        setChartData={props.setChartDataR}
                        processSequence={props.processSequenceR}
                    />
                </div>
            )}

            {/* {props.chartF && (
                <div>
                    <h1>Output Table</h1>
                    <OutputTable
                        processData={props.processData}
                        waitTime={waitingTimeF}
                        turnArTime={turnAroundTimeF}
                    />
                    <h1>Gantt Chart</h1>
                    <Timeline
                        chart={props.chartF}
                        chartData={props.chartDataF}
                        setChartData={props.setChartDataF}
                        processSequence={props.processSequenceF}
                    />
                </div>
            )}

            {props.chartS && (
                <div>
                    <h1>Output Table</h1>
                    <OutputTable
                        processData={props.processData}
                        waitTime={waitingTimeS}
                        turnArTime={turnAroundTimeS}
                    />
                    <h1>Gantt Chart</h1>
                    <Timeline
                        chart={props.chartS}
                        chartData={props.chartDataS}
                        setChartData={props.setChartDataS}
                        processSequence={props.processSequenceS}
                    />
                </div>
            )} */}
        </div>
    );
};

export default Comp;
