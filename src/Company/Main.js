import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import CompanyLogin from "./Login";
import CompanySignup from "./SignUp";
import {Card, CardContent} from "@material-ui/core";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import IconButton from "@material-ui/core/IconButton";
import AppBar from "../Component/AppBar";


const styles = {
    divMain: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%",
        paddingTop: "1%"
    }, contentMain: {
        width: "30%"
    }, card: {
        minWidth: "275"
    }
}

class Main extends Component {

    constructor(props) {
        super(props);

    }

    handleBackButton(e) {
        console.log("Back button clicked");
    }

    render() {

        const {classes} = this.props;

        const backButton = (
            <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.handleBackButton}
            >
                <ArrowBackIos/>
            </IconButton>
        );

        return (
            <>
                <AppBar button={backButton}/>
                <div className={classes.divMain}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography component="h2" variant="display2" gutterBottom>
                                Company component
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
                                tenetur
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