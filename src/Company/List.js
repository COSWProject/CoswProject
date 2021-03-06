import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
    root: {

        overflowX: 'auto',
    },
    inline: {
        display: 'inline',
    },
});

function list(props) {
    const { classes } = props;
    return (
        <>
        <List>
            <ListItem alignItems="flex-start" component="a" href="/confirm-assistance">
                        <ListItemAvatar>
                            <Avatar alt="PWC" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Daniel Alejandro Orozco "
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" className={classes.inline} color="textPrimary">
                                        02/04/2019 1:00 pm
                                    </Typography>
                                    {'- Invited by: Pepito perez'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
            <ListItem alignItems="flex-start" component="a" href="/confirm-assistance">
                        <ListItemAvatar>
                            <Avatar alt="BBVA" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="BBVA"
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" className={classes.inline} color="textPrimary">
                                       Tomorrow 3 pm
                                    </Typography>
                                    {" Invited by:- Juan Latorre"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
            <ListItem alignItems="flex-start" component="a" href="/confirm-assistance">
                <ListItemAvatar>
                    <Avatar alt="Eci"/>
                </ListItemAvatar>
                <ListItemText
                    primary="Escuela Colombiana de Ingenieria Julio Garavito"
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                Today 8:30 am
                            </Typography>
                            {" Invited by: - Oswaldo Navetty"}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
        </>
    );
}

list.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(list);
