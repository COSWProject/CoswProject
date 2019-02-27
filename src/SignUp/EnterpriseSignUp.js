import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class EnterpriseSignUp extends Component {

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

    render() {

        const inputs = [
            {
                label: "Name",
                type: "text",
                onchange: this.handleChangeName
            }, {
                label: "Ubication",
                type: "text",
                onchange: this.handleChangeUbication
            }, {
                label: "Email",
                type: "text",
                onchange: this.handleChangeEmail
            }, {
                label: "Phone",
                type: "number",
                onchange: this.handleChangePhone
            }, {
                label: "Nit",
                type: "number",
                onchange: this.handleChangeNit
            }, {
                label: "Password",
                type: "password",
                onchange: this.handleChangePassword
            }
        ];


        const inputTexts = inputs.map((x) => {

        })

        return (
            <>
            </>
        );
    }
}

export default EnterpriseSignUp;