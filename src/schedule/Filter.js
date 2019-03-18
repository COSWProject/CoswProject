import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Tune from '@material-ui/icons/Tune';
import SimpleModal from "./SimpleModal";


const styles = theme => ({
    text: {
        width: "90%"
    }, button: {
        width: "70%"
    }, leftIcon: {
        marginRight: theme.spacing.unit,
    }
})

class Filter extends Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {

        const {classes} = this.props;

        const fields = [
            {
                field: "Invited by",
                onchange: this.handleChangeInvitedBy,
                type: "text"
            }, {
                field: "Date",
                onchange: this.handleChangeDate,
                type: "date",
                default: "2019-01-01"
            }];

        const textFields = fields.map((x, i) => {
            return (
                <>
                    <TextField
                        required
                        key={i}
                        label={x.field}
                        onChange={x.onchange}
                        margin="normal"
                        className={classes.text}
                        variant="outlined"
                        type={x.type}
                        defaultValue={x.default}
                    />
                    <br/>
                </>
            );
        });



        const button = (
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
            >
                Filter
            </Button>
        )

        const form = (
            <form>
                {textFields}
                {button}
            </form>
        );

        const modalButton = (
            <Tune className={classes.leftIcon}/>
        );

        return (
            <>
                <SimpleModal
                    title="Filter"
                    form={form}
                    dialogContent="Here you can filter your meetings to show them by Date or Invited by"
                    modalButton={modalButton}
                    color="inherit"
                />
            </>
        );
    }

}

export default withStyles(styles)(Filter);