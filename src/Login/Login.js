import React from "react";
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/es/Paper/Paper";
import './Login.css';
import logo from './../img/Logo.png';
import user from './../img/user.svg';
import password from './../img/password.svg';
import {Button, Checkbox, FormControlLabel} from "@material-ui/core";
import Link from "@material-ui/core/Link";

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {email: "", password: ""};
        this.handleLogin = this.handleLogin.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleLogin() {
        if (this.state.email === localStorage.getItem('email') && this.state.password === localStorage.getItem('password')) {
            localStorage.setItem('page', 'home');
            console.log('Logged');
        }
        this.setState({
            email: "",
            password: ""
        });
    }

    handleEmailChange(e) {
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
        return (
            <Paper className="paper" elevation={6}>
                <img src={logo} alt="logo"/>
                <form className="form" onSubmit={this.handleLogin}>
                    <TextField required label="Username" margin="normal" onChange={this.handleEmailChange} InputProps={{startAdornment: (<img src={user} alt="user"/>)}}/>
                    <br/>
                    <TextField required type="password" label="Password" margin="normal" onChange={this.handlePasswordChange} InputProps={{startAdornment: (<img src={password} alt="password"/>)}}/>
                    <br/>
                    <FormControlLabel control={<Checkbox color="primary"/>} label="Keep me logged in"/>
                    <br/>
                    <Button type="submit" variant="outlined" color="primary">Login</Button>
                </form>
                <br/>
                <Link href="/signup" variant="body2">Don't have an account? Create Account</Link>
            </Paper>
        );
    }
}