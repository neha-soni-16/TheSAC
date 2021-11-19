import React, { useState, useEffect } from "react";

const OutputTable = (props) => {
    const [outputData, setOutputData] = useState([]);

    const fillOutputData = () => {
        for (let i = 0; i < props.processData.length; i++) {
            const temp = [];
            temp.push(props.processData[i].ProcessId);
            temp.push(props.processData[i].ArrivalTime);
            temp.push(props.processData[i].BurstTime);
            temp.push(props.waitTime[i]);
            temp.push(props.turnArTime[i]);
            setOutputData((outputData) => [...outputData, temp]);
        }
    };

    useEffect(() => {
        fillOutputData();
        return () => {};
    }, []);

    return (
        <div className="table">
            <div className="dataTableContainer">
                <table>
                    <thead>
                        <tr>
                            <th>Process ID</th>
                            <th>Arrival Time</th>
                            <th>Burst Time</th>
                            <th>Waiting Time</th>
                            <th>Turn Around Time</th>
                        </tr>
                    </thead>

                    <tbody>
                        {outputData.map((process) => (
                            <tr>
                                <td>{process[0]}</td>
                                <td>{process[1]}</td>
                                <td>{process[2]}</td>
                                <td>{process[3]}</td>
                                <td>{process[4]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OutputTable;
