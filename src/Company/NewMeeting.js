
import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBarComponent from "../Component/AppBarComponent";
import PaperComponent from "../Component/PaperComponent";
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from "@material-ui/core/IconButton";
import axios from 'axios';

const styles = theme => ({
    backButton: {
        marginLeft: -12,
        marginRight: 20,
    }, text: {
        width: "90%"
    }, form: {
        marginTop: "7%"
    }, button: {
        width: '80%',
        marginBottom: 20,
        marginTop: 20,
    }
});

class NewMeeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: "",
            visitorId: 0,
            hostName: "",
            hour: "",
            personCharge: ""
        }

        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeVisitorId = this.handleChangeVisitorId.bind(this);
        this.handleChangeHostName = this.handleChangeHostName.bind(this);
        this.handleChangeHour = this.handleChangeHour.bind(this);
        this.handleChangePersonCharge = this.handleChangePersonCharge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeDate(e) {
        this.setState({date: e.target.value});
    }

    handleChangeVisitorId(e) {
        this.setState({visitorId: e.target.value});
    }

    handleChangeHostName(e) {
        this.setState({hostName: e.target.value});
    }

    handleChangeHour(e) {
        this.setState({hour: e.target.value});
    }

    handleChangePersonCharge(e) {
        this.setState({personCharge: e.target.value});
    }

    handleBackButton() {
        window.location.href = "/company/meetings"
    }

    handleSubmit(e) {
        e.preventDefault();
        this.instance = axios.post('http://localhost:8080/api/access/', {
                                        owner: this.state.hostName,
                                        qr: "ds",
                                        invitedBy: this.state.personCharge,
                                        institution: "ECI",
                                        time: this.state.hour,
                                        date: this.state.date,
                                        expirationTime: "12:00"
                                    },{
                                    headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}
                                    }
                                ).then(() => {
                                                  alert("Company created");
                                                  window.location.href = "/"
                                              })
                                              .catch((error) => {
                                                  console.log(error)
                                              })
    }

    render() {

        const {classes} = this.props;

        const inputs = [
            {
                label: "Date",
                type: "date",
                onChange: this.handleChangeDate,
                default: "2019-01-01"
            }, {
                label: "Visitor ID",
                type: "number",
                onChange: this.handleChangeVisitorId,
            }, {
                label: "Host Name",
                type: "text",
                onChange: this.handleChangeHostName,
            }, {
                label: "Hour",
                type: "time",
                onChange: this.handleChangeHour,
                default: "00:00"
            }, {
                label: "Person in charge",
                type: "text",
                onChange: this.handleChangePersonCharge,
            }
        ]

        const inputTexts = inputs.map((x) => {
            return (
                <>
                    <TextField
                        required
                        className={classes.text}
                        label={x.label}
                        margin="normal"
                        onChange={x.onChange}
                        type={x.type}
                        defaultValue={x.default}
                    />
                </>
            );
        });

        const formButton = (
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Create
            </Button>
        );

        const form = (
            <form className={classes.form} onSubmit={this.handleSubmit}>
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
                    title="New meeting"
                    button={backButton}
                />
                <PaperComponent
                    form={form}
                    title="New meeting"
                />
            </>
        );
    }
}

export default withStyles(styles)(NewMeeting);
