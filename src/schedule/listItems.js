import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                a
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>------------------</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                a
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
    </div>
);