import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({});

class Profile extends Component {
    render() {

        const {classes} = this.props;

        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.handleBackButton}
                        >
                            <ArrowBackIos/>
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Easy Access
                        </Typography>
                    </Toolbar>
                </AppBar>
            </>
        );
    }
}

export default withStyles(styles)(Profile);