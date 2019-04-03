import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import PaperComponent from "../Component/PaperComponent";
import AppBarComponent from "../Component/AppBarComponent";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";
import axios from 'axios';

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
        this.handleSubmit = this.handleSubmit.bind(this);
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

        axios.post('http://localhost:8080/token/new', {
            name: this.state.name,
            ubication: this.state.ubication,
            email: this.state.email,
            phoneNumber: this.state.phone,
            nit: this.state.nit,
            password: this.state.password
        })
            .then(() => {
                alert("Company created");
                window.location.href = "/"
            })
            .catch((error) => {
                console.log(error)
                alert("Error creating the company");
            })
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
            }, {
                label: "Ubication",
                type: "text",
                onchange: this.handleChangeUbication,
            }, {
                label: "Email",
                type: "text",
                onchange: this.handleChangeEmail,
            }, {
                label: "Phone",
                type: "number",
                onchange: this.handleChangePhone,
            }, {
                label: "Nit",
                type: "number",
                onchange: this.handleChangeNit,
            }, {
                label: "Password",
                type: "password",
                onchange: this.handleChangePassword,
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
                    />
                    <br/>
                </div>
            );
        });

        const formButton = (
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Sign Up
            </Button>
        );

        const form = (
            <form
                className={classes.form}
                onSubmit={this.handleSubmit}>
                {inputTexts}
                {formButton}
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
                <AppBarComponent
                    title="Sign Up"
                    button={backButton}
                />
                <PaperComponent
                    form={form}
                    title="Company sign up"
                />
            </>
        );
    }
}

export default withStyles(styles)(SignUp);