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


class UserSignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            id: 0,
            email: "",
            mobilePhone: 0,
            address: "",
            homePhone: 0,
            occupation: "",
            organization: "",
            city: "",
            region: "",
            country: "",
            postalCode: 0
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeID = this.handleChangeID.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMobilePhone = this.handleChangeMobilePhone.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeHomePhone = this.handleChangeHomePhone.bind(this);
        this.handleChangeOccupation = this.handleChangeOccupation.bind(this);
        this.handleChangeOrganization = this.handleChangeOrganization.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeRegion = this.handleChangeRegion.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.handleChangePostalCode = this.handleChangePostalCode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    handleChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    handleChangeID(e){
        this.setState({
            id: e.target.value
        })
    }

    handleChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    handleChangeMobilePhone(e){
        this.setState({
            mobilePhone: e.target.value
        })
    }

    handleChangeAddress(e){
        this.setState({
            address: e.target.value
        })
    }

    handleChangeHomePhone(e){
        this.setState({
            homePhone: e.target.value
        })
    }

    handleChangeOccupation(e){
        this.setState({
            occupation: e.target.value
        })
    }

    handleChangeOrganization(e){
        this.setState({
            organization: e.target.value
        })
    }

    handleChangeCity(e){
        this.setState({
            city: e.target.value
        })
    }

    handleChangeRegion(e){
        this.setState({
            region: e.target.value
        })
    }

    handleChangeCountry(e){
        this.setState({
            country: e.target.value
        })
    }

    handleChangePostalCode(e){
        this.setState({
            postalCode: e.target.value
        })
    }

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    handleSubmit(e) {

        e.preventDefault();

        axios.post('http://localhost:8080/token/newUser', {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            password: this.state.password,
            organization: this.state.organization,
            mobilePhone: this.state.mobilePhone,
            homePhone: this.state.homePhone,
            occupation: this.state.occupation,
            city: this.state.city,
            region: this.state.region,
            postalCode: this.state.postalCode,
            country: this.state.country

        })
            .then(() => {
                alert("User created");
                window.location.href = "/"
            })
            .catch((error) => {
                console.log(error)
                alert("Error creating the user");
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
            },
            {
                label: "ID",
                type: "number",
                onchange: this.handleChangeID
            },
            {
                label: "Email",
                type: "text",
                onchange: this.handleChangeEmail
            },
            {
                label: "Password",
                type: "password",
                onchange: this.handleChangePassword
            },
            {
                label: "Mobile Phone",
                type: "number",
                onchange: this.handleChangeMobilePhone
            },
            {
                label: "Home Phone",
                type: "number",
                onchange: this.handleChangeHomePhone
            },
            {
                label: "Address line 1",
                type: "text",
                onchange: this.handleChangeAddress
            },
            {
                label: "City",
                type: "text",
                onchange: this.handleChangeCity
            },
            {
                label: "State/Region",
                type: "text",
                onchange: this.handleChangeRegion
            },
            {
                label: "Country",
                type: "text",
                onchange: this.handleChangeCountry
            },
            {
                label: "Zip/Postal Code",
                type: "number",
                onchange: this.handleChangePostalCode
            },
            {
                label: "Occupation",
                type: "text",
                onchange: this.handleChangeOccupation
            },
            {
                label: "Organization",
                type: "text",
                onchange: this.handleChangeOrganization
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
                    title="User sign up"
                />
            </>
        );
    }
}

export default withStyles(styles)(UserSignUp);