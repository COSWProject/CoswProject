import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import GpsFixed from '@material-ui/icons/GpsFixed';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import VpnKey from '@material-ui/icons/VpnKey';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import SimpleModal from "./SimpleModal";

const styles = theme => ({
    form: {
        marginTop: "7%"
    }, text: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 350,
    }, main: {
        textAlign: 'center'
    }, icon: {
        marginRight: "1%"
    }, button: {
        width: 300
    }, menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
});

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            ubication: "",
            email: "",
            phone: 0,
            nit: 0,
            password: ""
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUbication = this.handleChangeUbication.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeNit = this.handleChangeNit.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeName(e) {
        this.setState({name: e.target.value});
    }

    handleChangeUbication(e) {
        this.setState({ubication: e.target.value});
    }

    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    handleChangePhone(e) {
        this.setState({phone: e.target.value});
    }

    handleChangeNit(e) {
        this.setState({nit: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }

    handleSubmit(e) {

        e.preventDefault();

        console.log("Logged")
    }

    render() {


        const {classes} = this.props;

        const inputs = [
            {
                label: "Name",
                type: "text",
                onchange: this.handleChangeName,
                icon: <AccountCircle className={classes.icon}/>
            }, {
                label: "Ubication",
                type: "text",
                onchange: this.handleChangeUbication,
                icon: <GpsFixed className={classes.icon}/>
            }, {
                label: "Email",
                type: "text",
                onchange: this.handleChangeEmail,
                icon: <Email className={classes.icon}/>
            }, {
                label: "Phone",
                type: "number",
                onchange: this.handleChangePhone,
                icon: <Phone className={classes.icon}/>
            }, {
                label: "Nit",
                type: "number",
                onchange: this.handleChangeNit,
                icon: <AssignmentInd className={classes.icon}/>
            }, {
                label: "Password",
                type: "password",
                onchange: this.handleChangePassword,
                icon: <VpnKey className={classes.icon}/>
            }
        ];

        const inputTexts = inputs.map((x) => {
            return (
                <>
                    <CssBaseline/>
                    <TextField
                        required
                        className={classes.text}
                        label={x.label}
                        margin="normal"
                        onChange={x.onchange}
                        type={x.type}
                        InputProps={{
                            startAdornment: (
                                x.icon
                            )
                        }}
                    />
                    <br/>
                </>
            );
        });

        const form = (
            <form className={classes.form} onSubmit={this.handleSubmit}>
                {inputTexts}
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                >
                    Sign Up
                </Button>
            </form>
        );

        return (
            <>
                <SimpleModal elements={form}/>
            </>
        );
    }
}

export default withStyles(styles)(SignUp);