import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import DrawerComponent from "../Component/DrawerComponent";
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const styles = {}

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleMeetings() {
        window.location.href = "/company/meetings"
    }

    render() {

        const {classes} = this.props;

        const items = [
            {
                label: "Meetings",
                icon: <MeetingRoom/>,
                onClick: this.handleMeetings
            }
        ];

        const drawerItems = items.map((x, i) => {
            return (
                <ListItem
                    button
                    onClick={x.onClick}
                    key={i}
                >
                    <ListItemIcon>
                        {x.icon}
                    </ListItemIcon>
                    <ListItemText primary={x.label}/>
                </ListItem>
            );
        });

        return (
            <>
                <DrawerComponent
                    title="Profile"
                    drawerItems={drawerItems}
                />
            </>
        );
    }
}

export default withStyles(styles)(Profile);