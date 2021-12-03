import React from "react";
import "../css/About.css";
function About() {
    return (
        <div className="About">
            <p>
                <h1>About The SAC</h1>
            </p>
            <p>
                The SAC is our course project for the course Operating System.
                This is a web-based application implemented on react js and
                styling by CSS. In this application, we have used three CPU
                scheduling algorithms that are First Come First Serve,
                Round-Robin, and Shortest Job First. Users can visualise the
                scheduling of processes scheduled by any one of the algorithms.
                For better understanding, we have implemented a Gantt chart for
                the Scheduling algorithm. We have also provided an elaboration
                of all the scheduling algorithms under the section of Algorithm
                Elaborate. Under the same section, we have also included pseudo
                algorithms for each algorithm. In the visualise section, we can
                add different processes for scheduling by adding their process
                id, arrival time, and burst time for each process. Each process
                added will be displayed in the table below. After computing all
                the results an output table will be displayed which will display
                certain information for each process computed by the algorithm.
                Below this Gantt chart will be displayed which shows which
                process is running for what time.
            </p>
            <p>
                <h2>Team Members:</h2>
                <ol>
                    <li>Neha Soni (B19CSE058)</li>
                    <li>Nikhil Raj (B19CSE059)</li>
                    <li>Nandini Verma (B19CSE057)</li>
                    <li>Ekta Choudhary (B19CSE030)</li>
                </ol>
            </p>
        </div>
    );
}

export default About;
