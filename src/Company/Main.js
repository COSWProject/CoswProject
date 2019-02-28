import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CompanyLogin from "./Login";
import CompanySignup from "./SignUp";

const styles = theme => ({

});

class Main extends Component {
    render() {

        const {classes} = this.props;

        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
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