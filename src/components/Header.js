import React from "react";
import "../css/Header.css";
import {
    AppBar,
    Typography,
    Toolbar,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import MenuOpenOutlinedIcon from "@material-ui/icons/MenuOpen";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";

const Header = (props) => {
    const [state, setState] = React.useState(false);

    const toogleDrawer = (open) => (event) => {
        setState(open);
    };

    const list = () => (
        <div className="headerListContainer" onClick={toogleDrawer(false)}>
            <List className="headerList">
                <ListItem className="headerListItem" button>
                    Home
                </ListItem>
                <ListItem className="headerListItem" button>
                    Visualise
                </ListItem>
                <ListItem className="headerListItem" button>
                    Elaborate
                </ListItem>
                <ListItem className="headerListItem" button>
                    Compare
                </ListItem>
                <ListItem className="headerListItem" button>
                    About
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className="header">
            <CssBaseline />
            <AppBar className="appBar" position="sticky">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    // sx={{ ...(open && { display: "none" }) }}
                    onClick={toogleDrawer(true)}
                >
                    <MenuOpenOutlinedIcon className="menuIcon" />
                </IconButton>

                <Drawer
                    anchor={"top"}
                    open={state}
                    onClose={toogleDrawer(false)}
                >
                    {list()}
                </Drawer>

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
        </div>
    );
};

export default Header;
