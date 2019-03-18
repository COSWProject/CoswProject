import React, {Component} from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    card: {
        width: "100%",
        marginBottom: "1%",
        float: "left"
    }
});

class Access extends Component {

    render() {

        const {classes} = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        <b>Responsible:</b> {this.props.access.responsible}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        <b>Description:</b> {this.props.access.description}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        <b>Date:</b> {this.props.access.dueDate}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        <b>Status:</b> {this.props.access.status}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(Access);