import React from 'react';
import "../css/SJF.css";

const SjfElab = () => {
    return (
        <div className="SJF">
            <h1>Shortest Job First</h1>
            <h2>Summary</h2>
            <p>Shortest job first is a scheduling policy that selects the waiting algorithm with shortest execution time to execute next. If two process have same execution time the they are scheduled according to the minimum arrival time.</p>
            <h2>Pseudo Code</h2>
            <p>
                <ol >
                    <li>Input format for each Process to be added :-
                        <br/>&ensp;Process Id &emsp; Arrival Time &emsp; Burst Time</li>
                    <li>Processes will be saved as objects in the array.</li>
                    <li>Sort the array according to the burst time of processes.</li>
                    <li>If two processes have same burst time the select the one with smallest arrival time.</li>
                    <li>Calculating the waiting time and turnaround time for each process and average waiting time and average turnaround time.</li>
                    <li>Printing the above outcomes on the screen.</li>
                </ol>
            </p>
        </div>
    )
}

export default SjfElab;
