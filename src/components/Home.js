import React from "react";
import "../css/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="imageContainer">
                <div className="imageHome">
                    <img className="hover" src="/visual.png" alt="" />
                    <h3 className="homeText"> Algorithm <br/> Visualisation </h3>
                </div>
                <div className="imageHome">
                    <img className="hover" src="/elaborate.png" alt="" />
                    <h3 className="homeText"> Algorithm <br/> Elaboration </h3>
                </div>
                <div className="imageHome">
                    <img className="hover" src="/compare.png" alt="" />
                    <h3 className="homeText"> Algorithm <br/> Comparision </h3>
                </div>
            </div>
        </div>
    );
}

export default Home;
