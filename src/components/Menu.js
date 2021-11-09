import React from "react";
import { Drawer, List, ListItem } from "@material-ui/core";
import "../css/Menu.css";

import { Link } from "react-router-dom";

function Menu(props) {
    // const changeComponentAndHeader = (newComponent) => {
    //     props.setComponent(newComponent);
    //     props.setHeader(newComponent);
    // };

    // const list = () => (
    //     <div className="headerListContainer" onClick={props.setState(false)}>
    //         <List className="headerList">
    //             <ListItem
    //                 className="headerListItem"
    //                 button
    //                 onClick={() => {
    //                     changeComponentAndHeader("Home");
    //                 }}
    //             >
    //                 Home
    //             </ListItem>
    //             <ListItem
    //                 className="headerListItem"
    //                 button
    //                 onClick={() => {
    //                     changeComponentAndHeader("Visualise");
    //                 }}
    //             >
    //                 Visualise
    //             </ListItem>
    //             <ListItem
    //                 className="headerListItem"
    //                 button
    //                 onClick={() => {
    //                     changeComponentAndHeader("Elaborate");
    //                 }}
    //             >
    //                 Elaborate
    //             </ListItem>
    //             <ListItem
    //                 className="headerListItem"
    //                 button
    //                 onClick={() => {
    //                     changeComponentAndHeader("Compare");
    //                 }}
    //             >
    //                 Compare
    //             </ListItem>
    //             <ListItem
    //                 className="headerListItem"
    //                 button
    //                 onClick={() => {
    //                     changeComponentAndHeader("About");
    //                 }}
    //             >
    //                 About
    //             </ListItem>
    //         </List>
    //     </div>
    // );

    const list = () => (
        <div className="headerListContainer" onClick={props.setState(false)}>
            <List className="headerList">
                <ListItem className="headerListItem" button>
                    <Link to="/Home" className="noLink">
                        Home
                    </Link>
                </ListItem>
                <ListItem className="headerListItem" button>
                    <Link to="/Visualise" className="noLink">
                        Visualise
                    </Link>
                </ListItem>
                <ListItem className="headerListItem" button>
                    <Link to="/Elaborate" className="noLink">
                        Elaborate
                    </Link>
                </ListItem>
                <ListItem className="headerListItem" button>
                    <Link to="/Compare" className="noLink">
                        Compare
                    </Link>
                </ListItem>
                <ListItem className="headerListItem" button>
                    <Link to="/About" className="noLink">
                        About
                    </Link>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className="menu">
            <Drawer
                anchor={"top"}
                open={props.state}
                onClose={props.setState(false)}
            >
                {list()}
            </Drawer>
        </div>
    );
}

export default Menu;
