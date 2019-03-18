
import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/core/es/internal/svg-icons/KeyboardArrowLeft";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import DateRange from '@material-ui/icons/DateRange';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Place from '@material-ui/icons/Place';
import WatchLater from '@material-ui/icons/WatchLater';
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }, grow: {
        flexGrow: 1,
        textAlign: "left"
    }, text: {
        width: 350
    }, icon: {
        marginRight: "1%"
    }, form: {
        marginTop: "7%"
    }, button: {
        width: 300
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

    handleSubmit(e) {

        e.preventDefault();

        console.log("Metting created");

    }

    render() {

        const {classes} = this.props;

        const inputs = [
            {
                label: "Date",
                type: "date",
                onchange: this.handleChangeDate,
                icon: <DateRange className={classes.icon}/>
            }, {
                label: "Visitor ID",
                type: "number",
                onchange: this.handleChangeVisitorId,
                icon: <AccountCircle className={classes.icon}/>
            }, {
                label: "Host Name",
                type: "text",
                onchange: this.handleChangeHostName,
                icon: <Place className={classes.icon}/>
            }, {
                label: "Hour",
                type: "time",
                onchange: this.handleChangeHour,
                icon: <WatchLater className={classes.icon}/>
            }, {
                label: "Person in charge",
                type: "text",
                onchange: this.handleChangePersonCharge,
                icon: <AccountCircle className={classes.icon}/>
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

        return (
            <>
                <CssBaseline/>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <KeyboardArrowLeft/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Create Meeting
                        </Typography>
                    </Toolbar>
                </AppBar>
                <form className={classes.form} onSubmit={this.handleSubmit}>
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
            </>
        );
    }
}

export default withStyles(styles)(NewMeeting);
