import React,{useEffect} from 'react'
import Chart from "react-google-charts";

const Timeline = (props) => {
    const fillChart = (processSequence) => {
        console.log(props.processSequence);
        for (let i = 0; i < processSequence.length; i++) {
            const temp = [];
            temp.push((processSequence[i][0]));
            temp.push(new Date(0,0,0,0,0,processSequence[i][1]));
            temp.push(new Date(0,0,0,0,0,processSequence[i][2]));
            props.setChartData((chartData) => [...chartData, temp]);
        }
    };

    useEffect(() => {
        fillChart(props.processSequence)
        return () => {
        }
    }, [])

    return (
        <div>
            <Chart
                width={"1000px"}
                height={"1000px"}
                chartType="Timeline"
                loader={<div>Loading Chart</div>}
                data={props.chartData}
                options={{
                    showRowNumber: true,
                }}
                rootProps={{ "data-testid": "1" }}
            />
        </div>
    )
}

export default Timeline
