import React from "react";
import Table from "./Table";

const RR = (props) => {
    return (
        <div className="rr">
            <Table
                processData={props.processData}
                setProcessData={props.setProcessData}
            />
        </div>
    );
};

export default RR;
