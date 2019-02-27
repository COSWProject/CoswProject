import React from "react";
import './UserProfile.css';
import Paper from "@material-ui/core/es/Paper/Paper";
import profile from './../img/userProfile.svg';
import user from './../img/user.svg';
import id from './../img/id.svg';
import mail from './../img/mail.svg';
import location from './../img/location.svg';
import occupation from './../img/occupation.svg';
import organization from './../img/organization.svg';
import phone from './../img/phone.svg';
import {CssBaseline, Divider, Drawer, Typography, Toolbar, IconButton, List, ListItem} from "@material-ui/core";
import classNames from "classnames";
import logout from "../img/logout.svg";
import withStyles from "@material-ui/core/es/styles/withStyles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";

const styles = theme => ({
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
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    list: {
        width: 250,
    },
    drawer: {
        width: 250,
        flexShrink: 0,
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

    render() {

        const { classes} = this.props;

        return (
            <div>
                <CssBaseline/>
                <AppBar position="fixed" color="primary" className={classNames(classes.appBar, {[classes.appBarShift]: this.state.open})}>
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton onClick={this.handleDrawerOpen} color="inherit" aria-label="Menu" className={classNames(classes.menuButton, this.state.open && classes.hide)}>
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.open} variant="persistent" anchor="left">
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <div className={classes.list}>
                        <List>
                            <ListItem button>
                                <Link href='/Schedule'>Schedule</Link>
                            </ListItem>
                            <ListItem button>
                                <Link href='/UserProfile'>Profile</Link>
                            </ListItem>
                        </List>
                    </div>
                    <Divider/>
                    <div className="bottom">
                        <img src={logout} alt="logout"/>
                        <Link href='/'>Logout</Link>
                    </div>
                </Drawer>
                <main className={classNames(classes.content, {[classes.contentShift]: this.state.open})}>
                    <Paper className="paper" elevation={6}>
                        <img src={profile} alt="profile"/>
                        <form className="form">
                            <div className="grid">
                                <img src={user} alt="user"/>
                                <Typography>Daniel Alejandro Castañeda Orozco</Typography>
                            </div>
                            <div className="grid">
                                <img src={id} alt="id"/>
                                <Typography>1013672927</Typography>
                            </div>
                            <div className="grid">
                                <img src={mail} alt="mail"/>
                                <Typography>daniel.orozco@mail.escuelaing.edu.co</Typography>
                            </div>
                            <div className="grid">
                                <img src={phone} alt="phone"/>
                                <Typography>3145689756</Typography>
                            </div>
                            <div className="grid">
                                <img src={location} alt="location"/>
                                <Typography>Cra 85C #7a-56</Typography>
                            </div>
                            <div className="grid">
                                <img src={phone} alt="phone"/>
                                <Typography>5697865</Typography>
                            </div>
                            <div className="grid">
                                <img src={occupation} alt="occupation"/>
                                <Typography>Student</Typography>
                            </div>
                            <div className="grid">
                                <img src={organization} alt="organization"/>
                                <Typography>Escuela Colombiana de Ingeniería Julio Garavito</Typography>
                            </div>
                        </form>
                    </Paper>
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