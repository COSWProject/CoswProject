import React from "react";
import './UserProfile.css';
import profile from './../img/userProfile.svg';
import {
    Divider,
    Drawer,
    Typography,
    Toolbar,
    IconButton,
    List,
    ListItem,
    CardContent,
    ListItemIcon
} from "@material-ui/core";
import classNames from "classnames";
import withStyles from "@material-ui/core/es/styles/withStyles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import PersonIcon from '@material-ui/icons/Person';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import PlaceIcon from '@material-ui/icons/Place';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import GroupIcon from '@material-ui/icons/Group';
import WorkIcon from '@material-ui/icons/Work';
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${250}px)`,
        marginLeft: 250,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 12,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: theme.spacing.unit * 12,
        },
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    profile: {
        width: '30%'
    },
    list: {
        width: 250,
    },
    card: {
        minWidth: 275,
    },
    drawer: {
        width: 250,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 250,
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
        marginLeft: -250,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }
});

class UserProfile extends React.Component{

    constructor(props) {
        super(props);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }

    state = {
        open: false
    };

    handleDrawerOpen() {
        this.setState({
            open: true
        });
    };

    handleDrawerClose() {
        this.setState({
            open: false
        });
    };

    handleLogout() {
        window.location.href='/';
    }

    handleSchedule() {
        window.location.href='/schedule';
    }

    render() {

        const { classes} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="fixed" color="primary"
                        className={classNames(classes.appBar, {[classes.appBarShift]: this.state.open})}>
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            onClick={this.handleDrawerOpen}
                            color="inherit"
                            aria-label="Menu"
                            className={classNames(classes.menuButton, this.state.open && classes.hide)}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Profile
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    open={this.state.open}
                    variant="persistent"
                    anchor="left"
                    className={classes.drawer}
                    classes={{paper: classes.drawerPaper}}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <div className={classes.list}>
                        <Card className={classes.card}>
                            <CardContent>
                                <img src={profile} className={classes.profile} alt=""/>
                                <Typography variant="subtitle2" gutterBottom>
                                    <b>Daniel Alejandro Castañeda Orozco</b>
                                </Typography>
                            </CardContent>
                        </Card>
                        <List>
                            <ListItem button onClick={this.handleSchedule}>
                                <ListItemIcon><ViewAgendaIcon/></ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={this.handleLogout}>
                                <ListItemIcon><LogoutIcon/></ListItemIcon>
                                <ListItemText primary="Logout"/>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
                <main className={classNames(classes.content, {[classes.contentShift]: this.state.open})}>
                    <div className={classes.layout}>
                        <form className={classes.form}>
                            <img src={profile} className={classes.profile} alt=""/>
                            <div className="grid">
                                <PersonIcon/>
                                <Typography>Daniel Alejandro Castañeda Orozco</Typography>
                            </div>
                            <div className="grid">
                                <CreditCardIcon/>
                                <Typography>1013672927</Typography>
                            </div>
                            <div className="grid">
                                <LocalPostOfficeIcon/>
                                <Typography>daniel.orozco@mail.escuelaing.edu.co</Typography>
                            </div>
                            <div className="grid">
                                <SmartphoneIcon/>
                                <Typography>3145689756</Typography>
                            </div>
                            <div className="grid">
                                <PlaceIcon/>
                                <Typography>Cra 85C #7a-56</Typography>
                            </div>
                            <div className="grid">
                                <LocalPhoneIcon/>
                                <Typography>5697865</Typography>
                            </div>
                            <div className="grid">
                                <GroupIcon/>
                                <Typography>Student</Typography>
                            </div>
                            <div className="grid">
                                <WorkIcon/>
                                <Typography>Escuela Colombiana de Ingeniería Julio Garavito</Typography>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}

UserProfile.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(UserProfile);