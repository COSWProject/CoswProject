import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import './Login.css';
import VpnKey from '@material-ui/icons/VpnKey';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Button, Card, Checkbox, FormControlLabel, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBarComponent from "../Component/AppBar";
import PaperComponent from "../Component/PaperComponent";

const styles = theme => ({
    text: {
        width: "90%"
    }, button: {
        width: "80%",
        marginBottom: 20
    }, divButtons: {
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        overflow: "auto"
    }, card: {
        width: "85%",
        marginRight: "auto",
        marginLeft: "auto",
        borderRadius: "0",
        marginTop: "1%",
        paddingBottom: "3%",
        paddingTop: "3%"
    }, title: {
        paddingBottom: 20
    }
});

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {email: "", password: ""};
        this.handleLogin = this.handleLogin.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleLogin() {
        if (this.state.email === localStorage.getItem('email') &&
            this.state.password === localStorage.getItem('password')) {
            console.log('Logged');
        }
        this.setState({
            email: "",
            password: ""
        });
    }

    handleEmailChange(e) {
        alert("email");
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {

        const {classes} = this.props;

        const inputs = [
            {
                label: "Username",
                onChange: this.handleEmailChange,
                icon: <AccountCircle className={classes.icon}/>
            },
            {
                label: "Password",
                type: "password",
                onChange: this.handlePasswordChange,
                icon: <VpnKey className={classes.icon}/>
            }
        ];

        const inputTexts = inputs.map((x) => {
            return (
                <>
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
                </>
            );
        });

        const formButton = (
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
            >
                Sign In
            </Button>
        );

        const form = (
            <form className={classes.form}>
                <Typography component="h1" variant="h4">
                    EasyAccess
                </Typography>
                {inputTexts}
                <FormControlLabel
                    control={<Checkbox color="primary"/>}
                    label="Keep me logged in"
                />
                {formButton}
            </form>
        );

        const createAccount = (
            <>
                <Typography className={classes.title}>
                    Don't have an user account? Create one <a href="/user/signup">here</a>
                </Typography>
                <Typography className={classes.title}>
                    Don't have a company account? Create one <a href="/company/signup">here</a>
                </Typography>
            </>
        );

        return (
            <>
                <AppBarComponent title="Easy Access"/>
                <PaperComponent form={form} createAccount={createAccount}/>
            </>
        );
    }
}

export default withStyles(styles)(Login);