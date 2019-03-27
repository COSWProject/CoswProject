import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import GpsFixed from '@material-ui/icons/GpsFixed';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import VpnKey from '@material-ui/icons/VpnKey';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import SimpleModal from "../Component/SimpleModal";
import Typography from "@material-ui/core/Typography";
import PaperComponent from "../Component/PaperComponent";
import AppBarComponent from "../Component/AppBar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";

const styles = theme => ({
    text: {
        width: "90%"
    }, main: {
        textAlign: 'center'
    }, icon: {
        marginRight: "1%"
    }, button: {
        width: '80%',
        marginBottom: 20,
        marginTop: 20,
    }, backButton: {
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

    handleBackButton() {
        window.location.href = "/";
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

        const inputTexts = inputs.map((x, i) => {
            return (
                <div key={i}>
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
                </div>
            );
        });

        const form = (
            <form className={classes.form}
                  onSubmit={this.handleSubmit}>
                <Typography component="h1" variant="h4">
                    Company sign up
                </Typography>
                <br/>
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

        const backButton = (
            <IconButton
                className={classes.backButton}
                onClick={this.handleBackButton}
            >
                <ArrowBack/>
            </IconButton>
        );

        return (
            <>
                <AppBarComponent title="Sign Up" button={backButton}/>
                <PaperComponent form={form}/>
            </>
        );
    }
}

export default withStyles(styles)(SignUp);