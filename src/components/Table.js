import React, { useState } from "react";
import "../css/Table.css";

const Table = (props) => {
    const [addFormData, setAddFormData] = useState({
        ProcessId: "",
        ArrivalTime: "",
        BurstTime: "",
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldname = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldname] = fieldValue;

        setAddFormData(newFormData);
    };

    const addFormSubmit = (event) => {
        event.preventDefault();
        const newData = {
            ProcessId: addFormData.ProcessId,
            ArrivalTime: addFormData.ArrivalTime,
            BurstTime: addFormData.BurstTime,
        };

        const newFiles = [...props.processData, newData]; // copying ...(old contacts)
        props.setProcessData(newFiles);
        event.target.reset(); // clear input fields
    };

    return (
        <div className="table">
            <form onSubmit={addFormSubmit}>
                <h2>Add Processes !!</h2>
                <div className="formInput">
                    <input
                        type="number"
                        min="0"
                        name="ProcessId"
                        required="required"
                        placeholder="Process Id"
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="number"
                        min="0"
                        name="ArrivalTime"
                        required="required"
                        placeholder="Arrival Time"
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="number"
                        min="0"
                        name="BurstTime"
                        required="required"
                        placeholder="Burst Time"
                        onChange={handleAddFormChange}
                    />
                </div>

                <button type="submit">Add Process</button>
            </form>

            <div className="dataTableContainer">
                <table>
                    <thead>
                        <tr>
                            <th>Process ID</th>
                            <th>Arrival Time</th>
                            <th>Burst Time</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.processData.map((contact) => (
                            <tr>
                                <td>{contact.ProcessId}</td>
                                <td>{contact.ArrivalTime}</td>
                                <td>{contact.BurstTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
