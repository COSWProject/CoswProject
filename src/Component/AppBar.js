import React, {Component} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from '@material-ui/core/AppBar';

const styles = {
    grow: {
        flexGrow: 1,
        textAlign: "left"
    }
}

class AppBarComponent extends Component {
    render() {

        const {classes} = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    {this.props.button}
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Easy Access
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(AppBarComponent);