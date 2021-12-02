import React from "react";
import "../css/FCFS.css";

const FcfsElab = () => {
    return <div className="FCFS">
        <h1>First Comes First Serve</h1>
        <h2>Summary</h2>
        <p>Since FCFS (First Come First Serve) executes the process according to the arriving  time of the process, 
            here’s the pseudo code or the process that is planned to be implemented for programming it.
            We can say that the ready queue acts as a FIFO (First In First Out) queue thus the arriving 
            jobs/processes are placed at the end of the queue.</p>
        <h2>Pseudo Code</h2>
        <p>
            <ol >
                <li>Input from the user :  Processes (Process_id), Burst time</li>
                <li>Get the waiting time for all the processes where waiting time of 0th process = 0 (as it’ll execute as the program starts).</li>
                <li>For other processes, waiting time of ith process = burst time of (i-1)th process + waiting time of (i-1)th process.</li>
                <li>Now for turnaround time, it’ll be waiting time + burst time (calculated iteratively).</li>
                <li>To return average waiting time, (total_waiting_ time / total no of processes) will be returned.</li>
                <li>Finally for average turnaround time,  (total_turn_around_time / no_of_processes) will be calculated.</li>
            </ol>
        </p>
    </div>;
};

export default FcfsElab;
