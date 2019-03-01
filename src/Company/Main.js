import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CompanyLogin from "./Login";
import CompanySignup from "./SignUp";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';


const styles = theme => ({
    grow: {
        flexGrow: 1,
        textAlign: "left"
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
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
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <ArrowBackIos/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Easy Access
                        </Typography>
                    </Toolbar>
                </AppBar>
                <CompanyLogin/>
                <CompanySignup/>
            </>
        );
    }
}

export default withStyles(styles)(Main);