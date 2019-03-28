import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import DrawerComponent from "../Component/DrawerComponent";

const styles = {}

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    render() {

        const {classes} = this.props;

        return (
            <>
                <DrawerComponent title="Profile"/>
            </>
        );
    }
}

export default withStyles(styles)(Profile);