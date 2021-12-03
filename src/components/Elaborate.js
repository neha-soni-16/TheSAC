import React, { useState } from "react";
import FcfsElab from "./FcfsElab";
import RrElab from "./RrElab";
import SjfElab from "./SjfElab";
import ElabHome from "./ElabHome";

import { Routes, Route, Navigate } from "react-router-dom";

function Elaborate() {
    const [elaborateAlgo, setAlgorithm] = useState("none");

    return (
        <div className="elaborate">
            {/*<RrElab />*/}
            {/*<FcfsElab />*/}
            {/* <SjfElab /> */}
            <ElabHome />
            {/* <Routes>
                <Route
                    exact
                    path={"/Elaborate"}
                    element={<Navigate replace to="/Elaborate" />}
                />
                <Route exact path={"/Elaborate"} element={<Elaborate />} />
                <Route exact path={"/Elaborate/RR"} element={<RrElab />} />
                <Route exact path={"/Elaborate/FCFS"} element={<FcfsElab />} />
                <Route exact path={"/Elaborate/SJF"} element={<SjfElab />} />
            </Routes> */}
        </div>
    );
}

export default Elaborate;
