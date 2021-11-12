import React from "react";
import Table from "./Table";

const RR = (props) => {


    const findWaitingTime = (processData, n, wt, quantum) => {

        let rem_bt = new Array(n).fill(0);
        for (let i = 0; i < n; i++)
            rem_bt[i] = parseInt(processData[i].BurstTime);
 
        let t = 0; 
 

        while (1) {
            let done = true;
 
            for (let i = 0; i < n; i++) {

                if (rem_bt[i] > 0) {
                    done = false; 
 
                    if (rem_bt[i] > quantum) {

                        t += quantum;
 

                        rem_bt[i] -= quantum;
                    }
 

                    else {

                        t = t + rem_bt[i];

                        wt[i] = t - parseInt(processData[i].BurstTime);

                        rem_bt[i] = 0;
                    }
                }
            }
 
            if (done === true)
                break;
        }
    }

    const findTurnAroundTime = (processData, n, wt, tat) => {

        for (let i = 0; i < n; i++)
            tat[i] = parseInt(processData[i].BurstTime) + wt[i];
    }


    const findavgTime = (processData,quantum) => {

        let n = processData.length;

        let wt = new Array(n).fill(0), tat = new Array(n).fill(0);
        let total_wt = 0, total_tat = 0;

        findWaitingTime(processData, n, wt, quantum);

        findTurnAroundTime(processData, n, wt, tat);

        for (let i = 0; i < n; i++) {
            total_wt = total_wt + wt[i];
            total_tat = total_tat + tat[i];
 
          
        }

        console.log("Average waiting time = ", total_wt / n);
        console.log("Average turn around time = ", total_tat / n);

    }


    const handleCalculate = (event) =>{
        
        event.preventDefault();
        let quantum = parseInt(event.target.timeQuantum.value);

        findavgTime(props.processData,quantum);
    }

    return (
        <div className="rr">
            <Table
                processData={props.processData}
                setProcessData={props.setProcessData}
            />

            <form onSubmit={handleCalculate}>
                <input type="number" name="timeQuantum"/>
                <button>Calculate</button>
            </form>

        </div>
    );
};

export default RR;
