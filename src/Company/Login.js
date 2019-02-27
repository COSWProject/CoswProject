import React, {Component} from 'react';
import AppBar from "./NewMeeting";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowLeft from "@material-ui/core/es/internal/svg-icons/KeyboardArrowLeft";

const styles = theme => ({});

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            companyName: "",
            password: ""
        }

        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeCompanyName = this.handleChangeCompanyName.bind(this);
    }

    handleChangeCompanyName(e) {
        this.setState({companyName: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log("Redirect to company profile");
    }

    render() {

        const {classes} = this.props;

        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <KeyboardArrowLeft/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Create Meeting
                        </Typography>
                    </Toolbar>
                </AppBar>
            </>
        );
    }
}