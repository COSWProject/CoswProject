import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import './Login.css';
import {Button, Card, Checkbox, FormControl, FormControlLabel, Radio, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBarComponent from "../Component/AppBarComponent";
import PaperComponent from "../Component/PaperComponent";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";

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
        this.state = {
            email: "",
            password: "",
            value: "user"
        };

        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangeCompany = this.handleChangeCompany.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleLoginUser(e) {
        //Todo

        e.preventDefault();

    }

    handleLoginCompany(e) {
        //Todo

        e.preventDefault();

        window.location.href = "/company/meetings"
    }

    handleEmailChange(e) {
        alert("email");
        this.setState({email: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    handleChangeUser(e) {
        this.setState({value: e.target.value});
    }

    handleChangeCompany(e) {
        this.setState({value: e.target.value});
    }

    render() {

        const {classes} = this.props;

        const inputs = [
            {
                label: "Username",
                onChange: this.handleEmailChange,
            },
            {
                label: "Password",
                type: "password",
                onChange: this.handlePasswordChange,
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
                {this.state.value === "user" ? "Sign in user" : "Sign in company"}
            </Button>
        );

        const form = (
            <form className={classes.form}
                  onSubmit={this.state.value === "user" ? this.handleLoginUser : this.handleLoginCompany}
            >
                {inputTexts}
                <FormControlLabel
                    control={<Checkbox color="primary"/>}
                    label="Keep me logged in"
                />
                {formButton}
            </form>
        );

        const accountUser = (
            <Typography className={classes.title}>
                Don't have an account? Create one <a href="/user/signup">here</a>
            </Typography>
        );

        const accountCompany = (
            <Typography className={classes.title}>
                Don't have an account? Create one <a href="/company/signup">here</a>
            </Typography>
        );

        const createAccount = (
            <>
                {this.state.value === "user" ? accountUser : accountCompany}
            </>
        );

        const radioButtons = (
            <div>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup
                        value={this.state.value}
                        row
                    >
                        <FormControlLabel
                            value="user"
                            control={<Radio color="primary"/>}
                            label="User"
                            onClick={this.handleChangeUser}
                        />
                        <FormControlLabel
                            value="company"
                            control={<Radio color="primary"/>}
                            label="Company"
                            onClick={this.handleChangeCompany}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        );

        return (
            <>
                <AppBarComponent title="Easy Access"/>
                <PaperComponent
                    radioButtons={radioButtons}
                    form={form}
                    createAccount={createAccount}
                    title="Easy access"
                />
            </>
        );
    }
}

export default withStyles(styles)(Login);