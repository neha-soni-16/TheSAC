import React from "react";
import Table from "./Table";

const SJF = (props) => {
    const findWaitingTime = (processData, n, wt) => {
        let rem_bt = new Array(n).fill(0);
        for (let i = 0; i < n; i++)
            rem_bt[i] = parseInt(processData[i].BurstTime);
        let complete = 0, t = 0, minm = Number.MAX_VALUE;
        let shortest = 0, finish_time;
        let check = false;
        
        while (complete !=n) {
            
 
            for (let i = 0; i < n; i++) {
                if ((processData[i].ArrivalTime <= t) && (rem_bt[i]<minm && rem_bt[i]>0)) {
                    minm=rem_bt[i];
                    shortest = i;
                    check=true;
                }
            }
 
            if (check === false){
                t++;
                continue;
            }
            rem_bt[shortest]--;
            minm=rem_bt[shortest];
            if(minm==0){
                minm=Number.MAX_VALUE;
            }
            if(rem_bt[shortest]==0){
                complete++;
                check=false;
                finish_time=t+1;
                wt[shortest]=finish_time-processData[shortest].BurstTime-processData[shortest].ArrivalTime;
                if(wt[shortest]<0){
                    wt[shortest]=0;
                }
            }
            t++;
        }
    }

    const findTurnAroundTime = (processData, n, wt, tat) => {
        for (let i = 0; i < n; i++)
            tat[i] = parseInt(processData[i].BurstTime) + wt[i];
    }


    const findavgTime = (processData) => {

        let n = processData.length;

        let wt = new Array(n).fill(0), tat = new Array(n).fill(0);
        let total_wt = 0, total_tat = 0;

        findWaitingTime(processData, n, wt);

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
        //let quantum = parseInt(event.target.timeQuantum.value);

        findavgTime(props.processData);
    }

    return (
        <div className="sjf">
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

export default SJF;
