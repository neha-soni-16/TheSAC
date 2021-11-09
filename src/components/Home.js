import React from "react";
import "../css/Home.css";

import { Link } from "react-router-dom";

function Home(props) {
    // const changeComponentAndHeader = (newComponent) => {
    //     props.setComponent(newComponent);
    //     props.setHeader(newComponent);
    // };

    return (
        <div className="home">
            <div className="imageContainer">
                <div className="imageHome">
                    {/* <img
                        onClick={() => {
                            changeComponentAndHeader("Visualise");
                        }}
                        className="hover"
                        src="/visual.png"
                        alt=""
                    /> */}

                    <Link to="/Visualise">
                        {" "}
                        <img className="hover" src="/visual.png" alt="" />
                    </Link>

                    <h3 className="homeText">
                        {" "}
                        Algorithm <br /> Visualisation{" "}
                    </h3>
                </div>
                <div className="imageHome">
                    {/* <img
                        onClick={() => {
                            changeComponentAndHeader("Elaborate");
                        }}
                        className="hover"
                        src="/elaborate.png"
                        alt=""
                    /> */}

                    <Link to="/Elaborate">
                        <img className="hover" src="/elaborate.png" alt="" />
                    </Link>

                    <h3 className="homeText">
                        {" "}
                        Algorithm <br /> Elaboration{" "}
                    </h3>
                </div>
                <div className="imageHome">
                    {/* <img
                        onClick={() => {
                            changeComponentAndHeader("Compare");
                        }}
                        className="hover"
                        src="/compare.png"
                        alt=""
                    /> */}

                    <Link to="/Compare">
                        <img className="hover" src="/compare.png" alt="" />
                    </Link>

                    <h3 className="homeText">
                        {" "}
                        Algorithm <br /> Comparision{" "}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Home;
