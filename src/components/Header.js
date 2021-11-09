import React, { useState } from "react";
import "../css/Header.css";
import { AppBar, Typography, CssBaseline } from "@material-ui/core";
import MenuOpenOutlinedIcon from "@material-ui/icons/MenuOpen";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import Menu from "./Menu";

const Header = (props) => {
    const [drawer, setDrawer] = useState(false);

    const setToggleDrawer = (open) => (event) => {
        setDrawer(open);
    };

    return (
        <div className="header">
            <CssBaseline />
            <AppBar className="appBar" position="sticky">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={setToggleDrawer(true)}
                >
                    <MenuOpenOutlinedIcon className="menuIcon" />
                </IconButton>

                <div className="headerName">
                    <Typography className="homeTitle" variant="h5">
                        {props.name}
                    </Typography>
                    <Typography className="spaceTile" variant="h4">
                        &nbsp; | &nbsp;
                    </Typography>
                    <Typography className="theSACTitle" variant="h4">
                        The SAC
                    </Typography>
                </div>

                <AccountCircleIcon className="accountInvisible" />
            </AppBar>

            <Menu state={drawer} setState={setToggleDrawer} setHeader={props.setHeader}
                    setComponent={props.setComponent}/>
        </div>
    );
};

export default Header;
