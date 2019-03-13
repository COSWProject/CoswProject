import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import './Login.css';
import VpnKey from '@material-ui/icons/VpnKey';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Button, Card, Checkbox, FormControlLabel, Typography} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import withStyles from "@material-ui/core/styles/withStyles";
import SimpleModal from "../Component/SimpleModal";
import AppBarComponent from "../Component/AppBar";
import CompanySignIn from "../Company/Login";
import CompanySignUp from "../Company/SignUp";

const styles = theme => ({
    text: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "100%"
    }, avatar: {
        backgroundColor: "black",
        margin: theme.spacing.unit,
        textAlign: "center"
    }, button: {
        width: "70%",
        position: "left"
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
        if (this.state.email === localStorage.getItem('email') && this.state.password === localStorage.getItem('password')) {
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
                    <br/>
                </>
            );
        });

        const form = (
            <form className={classes.form}>
                <Typography component="h1" variant="h4" color="primary">
                    EasyAccess
                </Typography>
                <br/>
                {inputTexts}
                <br/>
                <FormControlLabel
                    control={<Checkbox color="primary"/>}
                    label="Keep me logged in"/>
                <br/>
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    action={this.handleLogin}
                    href="/schedule"
                >
                    Sign in
                </Button>
                <br/>
                <Link
                    href="/signup"
                    variant="body2"
                >
                    Don't have an account? Create Account
                </Link>
            </form>
        );

        return (
            <>
                <AppBarComponent title="Easy Access"/>
                <Card className={classes.card}>
                    <Typography component="h2" variant="display3" gutterBottom>
                        Welcome to Easy Access
                        <Typography variant="h6" gutterBottom>
                            Here you can manage your company access or view your own invitations
                        </Typography>
                    </Typography>
                    <div className={classes.divButtons}>
                        <SimpleModal
                            elements={form}
                            buttonName="User Sign in"
                            buttonSize="large"
                        />
                        <CompanySignIn/>
                        <CompanySignUp/>
                    </div>
                </Card>
            </>
        );
    }
}

export default withStyles(styles)(Login);