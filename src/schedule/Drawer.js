import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/es/AppBar";
import classNames from 'classnames';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import userIcon from "../img/user.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitIcon from "@material-ui/icons/ExitToApp";
import Person from '@material-ui/icons/Person';
import ModalFilter from "./Filter";
import SimpleTable from "./list";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from 'react-swipeable-views';
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import green from '@material-ui/core/colors/green';



const drawerWidth = 350;



function TabContainer(props) {
    const { children, dir } = props;

    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    appBarSpacer: theme.mixins.toolbar,
    root: {
        display: 'flex',

    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    userIcon: {
        width: '30%'
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        marginRight: 20
    }, leftIcon: {
        marginRight: theme.spacing.unit,
    },
    toolbarTitle: {
        flex: 1,
        textAlign: "left"
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        }
    },
    appBarStatus:{
        top:50
    }
});


class ScheduleDrawer extends Component {
    state = {
        value: 0,
    };


    constructor(props) {
        super(props);

        this.state = {
            open: false,
            tasks: [],
            user: {}
        };

        this.handleChangeIsLoggedIn = this.handleChangeIsLoggedIn.bind(this);
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };




    render() {
        const { classes, theme } = this.props;

        const {open} = this.state;

        const transitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen,
        };

        return (
            <div className={classes.root}>
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
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            EasyAccess
                        </Typography>
                        <ModalFilter/>
                    </Toolbar>
                </AppBar>

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
                    <div >
                        <Card className={classes.card}>
                            <CardContent>
                                <img src={userIcon} className={classes.userIcon} alt=""/>
                                <Typography variant="subtitle2" gutterBottom>
                                    <b>Maria Jose Pardo</b>
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <b>Email: </b>maria.pardo@gmail.com
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <b>Occupation: </b> Student
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <b>Cellphone:</b> 3202664698
                                </Typography>
                            </CardContent>
                        </Card>
                        <List>
                            <ListItem
                                button
                                onClick={this.handleProfilePage}
                            >
                                <ListItemIcon>
                                    <Person/>
                                </ListItemIcon>
                                <ListItemText primary="Profile"/>
                            </ListItem>
                            <ListItem
                                button
                                onClick={this.handleChangeIsLoggedIn}
                            >
                                <ListItemIcon>
                                    <ExitIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Logout"/>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.appBarSpacer} />
                        <AppBar position="fixed" color="default" className={classes.appBarStatus}>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                            >
                                <Tab label="Confirmed" />
                                <Tab label="Not confirmed" />

                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={this.state.value}
                            onChangeIndex={this.handleChangeIndex}
                        >
                            <SimpleTable/>
                            <SimpleTable/>
                        </SwipeableViews>


                </main>

            </div>
        );
    }

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    handleChangeIsLoggedIn() {
        localStorage.setItem("isLoggedIn", "false");
        window.location.href = '/';
    }

    handleProfilePage() {
        window.location.href = "/user-profile"
    }

}

ScheduleDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles,  { withTheme: true })(ScheduleDrawer);