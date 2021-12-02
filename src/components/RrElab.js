import React from 'react';
import "../css/RR.css";
const RrElab = () => {
    return (
        <div className="RR">
            <h1>Round Robin</h1>
            <h2>Summary</h2>
            <p>Round Robin is a preemptive process scheduling algorithm where each process is provided a fixed time to execute (time quantum). Provided is way it is planned to be implemented.</p>
            <h2>Pseudo Code</h2>
            <p>
                <ol >
                    <li>Input from the user :  Processes (Process_id), Burst time and time quantum.</li>
                    <li>Create an array to keep track of remaining burst time for the processes (initialise it with initial burst time).</li>
                    <li>Now, another array is initialised with 0 to store the waiting time for the processes and with that, initialise time (t) from 0.</li>
                    <li>In every iteration for every process,</li>
                    
                </ol>
                &emsp;&emsp;&emsp;&emsp;If remaining time (process) &gt; time quantum<br/>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;increase time by time quantum <br/>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;decrease remaining time by time quantum<br/>

                &emsp;&emsp;&emsp;&emsp;Otherwise <br/>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;increase time by remaining time<br/>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;waiting time of ith process = time - remaining burst time<br/>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;remaining burst time for ith process = 0<br/>

                &emsp;&emsp;&emsp;&emsp;Since we have waiting times for every process, turnaround time for ith process = its waiting time + burst time.<br/>

            </p>
        </div>
    )
}

export default RrElab;
