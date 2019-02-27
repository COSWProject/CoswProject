import React, {Component} from 'react';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            companynName: "",
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
        return (
            <>
            </>
        );
    }
}