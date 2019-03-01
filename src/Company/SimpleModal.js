import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Tune from '@material-ui/icons/Tune';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    buttonFilter: {
        width: "10%"
    }, leftIcon: {
        marginRight: theme.spacing.unit,
    }, dialog: {
        textAlign: "center",
    }, text: {
        width: "70%"
    }, button: {
        width: "70%"
    }
});

class FormDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        const {classes} = this.props;

        return (
            <div>
                <Button
                    color="primary"
                    variant="contained"
                    className={classes.buttonFilter}
                    onClick={this.handleClickOpen}
                >
                    {this.props.buttonName}
                </Button>
                <Dialog
                    fullWidth={true}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    className={classes.dialog}
                >
                    <DialogContent>
                        {this.props.elements}
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(FormDialog);