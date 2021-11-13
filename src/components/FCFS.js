import React,{useState} from "react";
import Table from "./Table";
import Chart from "react-google-charts";

let turnAround=[];

const FCFS = (props) => {


    const chartData=[[{type: 'string', id: 'processId' },{ type: 'number', id: 'Start' },{ type: 'number', id: 'End' }]];

    // const data_arr=[[{ type: 'string', id: 'President' },
    // { type: 'number', id: 'Start' },
    // { type: 'number', id: 'End' }]];

    // const num=1;


    // const temp = [];
    // temp.push(num.toString());
    // temp.push(0);
    // temp.push(12);

    // data_arr.push(temp);

    // data_arr.push(['Nik',20,34]);



    const findWaitingTime = (processData, processLen, waitTime) => {
        waitTime[0] = 0;
        for (let i = 1; i < processLen; i++) {
            waitTime[i] = parseInt(processData[i - 1].BurstTime) + waitTime[i - 1];
        }
    };

    const findTurnAroundTime = (
        processData,
        processLen,
        turnArTime,
        waitTime
    ) => {

        turnAround=[];
        for (let i = 0; i < processLen; i++) {
            turnArTime[i] = parseInt(processData[i].BurstTime) + waitTime[i];
            turnAround.push(turnArTime[i]);
        }



        
    };

    const fillChart = (processData,turnArTime) => {

        
        let start =0;
        let end=0;

        for (let i=0;i<processData.length;i++){

            const temp = [];
            temp.push((processData[i].ProcessId).toString());
            temp.push(start);
            temp.push(turnArTime[i]);

            start =turnArTime[i];
            end = end + turnArTime[i];

            chartData.push(temp);
            
        }
 
    }

    const [chart, setchart] = useState(false);

    const DisplayChart=()=>{



        fillChart(props.processData,turnAround);
        console.log(turnAround);


       return (    
        
        <Chart
            width={'1000px'}
            height={'1000px'}
            chartType="Timeline"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
            showRowNumber: true,
            }}
            rootProps={{ 'data-testid': '1' }}
      />)

    }



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

        fillChart(props.processData,turnAround);

        setchart(x => !x);






    
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

            {
                chart && <DisplayChart/>
            
            }

        </div>
    );
};

export default FCFS;
