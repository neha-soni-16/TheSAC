import React, { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Visualise from "./Visualise";
import Elaborate from "./Elaborate";
import Compare from "./Compare";
import About from "./About";
import RrElab from "./RrElab";
import SjfElab from "./SjfElab";
import ElabHome from "./ElabHome";
import FcfsElab from "./FcfsElab";

import { useLocation, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
    const [headerName, setHeaderName] = useState("Home");
    const [componentState, setComponentState] = useState("Home");

    const changeHeaderName = (newHeaderName) => {
        setHeaderName(newHeaderName);
    };

    const changeComponent = (newComponent) => {
        setComponentState(newComponent);
    };

    const location = useLocation();

    return (
        // <div>
        //     <Header
        //         name={headerName}
        //         setHeader={changeHeaderName}
        //         setComponent={changeComponent}
        //     />
        //     {componentState === "Home" ? (
        //         <Home
        //             setHeader={changeHeaderName}
        //             setComponent={changeComponent}
        //         />
        //     ) : componentState === "Visualise" ? (
        //         <Visualise />
        //     ) : componentState === "Elaborate" ? (
        //         <Elaborate />
        //     ) : componentState === "Compare" ? (
        //         <Compare />
        //     ) : (
        //         <About />
        //     )}
        // </div>
        <div>
            <Header
                name={location.pathname.substring(
                    location.pathname.lastIndexOf("/") + 1
                )}
            />
            <Routes>
                <Route
                    exact
                    path={"/"}
                    element={<Navigate replace to="/Home" />}
                />
                <Route exact path={"/Home"} element={<Home />} />
                <Route exact path={"/Visualise"} element={<Visualise />} />
                <Route exact path={"/Elaborate"} element={<Elaborate />} />
                <Route exact path={"/Compare"} element={<Compare />} />
                <Route exact path={"/About"} element={<About />} />
                <Route exact path={"/Elaborate/RR"} element={<RrElab />} />
                <Route exact path={"/Elaborate/FCFS"} element={<FcfsElab />} />
                <Route exact path={"/Elaborate/SJF"} element={<SjfElab />} />
            </Routes>
        </div>
    );
};

export default App;
