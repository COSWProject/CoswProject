import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from '@material-ui/icons/Menu';
import ExitToApp from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from "@material-ui/core/Divider";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

const drawerWidth = 300;

const styles = theme => ({
    root: {
        display: 'flex',
    }, appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    }, appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }, menuButton: {
        marginLeft: 12,
        marginRight: 20,
    }, hide: {
        display: 'none',
    }, drawer: {
        width: drawerWidth,
        flexShrink: 0,
    }, drawerPaper: {
        width: drawerWidth,
    }, drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }, content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    }, contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }
});

class DrawerComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    handleLogout() {

        localStorage.clear();

        window.location.href = "/"
    }

    render() {

        const {classes} = this.props;

        const {open} = this.state;

        const items = [
            {
            label: "Logout",
            icon: <ExitToApp/>,
            onClick: this.handleLogout
        }
        ];

        const defaultItems = items.map((x, i) => {
            return (
                <ListItem
                    button
                    onClick={x.onClick}
                    key={i}
                >
                    <ListItemIcon>
                        {x.icon}
                    </ListItemIcon>
                    <ListItemText primary={x.label}/>
                </ListItem>
            );
        });

        const appBar = (
            <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar disableGutters={!open}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        {this.props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        );

        const drawer = (
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                {this.props.cards}
                <List>
                    {this.props.drawerItems}
                    {defaultItems}
                </List>
            </Drawer>
        );

        const content = (
            <main
                className={classNames(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>
                {this.props.elements}
                {this.props.fabButton}
            </main>
        );

        return (
            <div className={classes.root}>
                <CssBaseline/>
                {appBar}
                {drawer}
                {content}
            </div>
        );
    }
}

export default withStyles(styles)(DrawerComponent);