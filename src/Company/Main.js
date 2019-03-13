import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CompanyLogin from "./Login";
import CompanySignup from "./SignUp";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import {Card, CardContent} from "@material-ui/core";


const styles = theme => ({
    grow: {
        flexGrow: 1,
        textAlign: "left"
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }, divMain: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%",
        paddingTop: "1%"
    }, contentMain: {
        width: "30%"
    }, card: {
        minWidth: "275"
    }
});

class Main extends Component {

    constructor(props) {
        super(props);

    }

    handleBackButton(e) {
        console.log("Back button clicked");
    }

    render() {

        const {classes} = this.props;

        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.handleBackButton}
                        >
                            <ArrowBackIos/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Easy Access
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.divMain}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography component="h2" variant="display2" gutterBottom>
                                Company component
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            </Typography>
                            <CompanyLogin/>
                            <CompanySignup/>
                        </CardContent>
                    </Card>
                </div>
            </>
        );
    }
}

export default withStyles(styles)(Main);