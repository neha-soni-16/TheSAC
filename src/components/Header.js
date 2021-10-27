import React from "react";
import "../css/Header.css";
import { AppBar, Typography, Toolbar, CssBaseline } from "@material-ui/core";
import MenuOpenOutlinedIcon from "@material-ui/icons/MenuOpen";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";

const Header = () => {
    var open = true;
    return (
        <div className="header">
            <CssBaseline />
            <AppBar className="appBar" position="sticky">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{ ...(open && { display: "none" }) }}
                >
                    <MenuOpenOutlinedIcon className="menuIcon" />
                </IconButton>

                <div className="headerName">
                    <Typography className="home" variant="h5">
                        Home
                    </Typography>
                    <Typography className="space" variant="h4">
                        &nbsp; | &nbsp;
                    </Typography>
                    <Typography className="theSAC" variant="h4">
                        The SAC
                    </Typography>
                </div>

                <AccountCircleIcon className="accountInvisible" />
            </AppBar>
        </div>
    );
};

export default Header;
