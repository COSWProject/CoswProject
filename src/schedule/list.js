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
                            primary="PriceWaters Coopers"
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" className={classes.inline} color="textPrimary">
                                        02/04/2019 1:00 pm
                                    </Typography>
                                    {'- Pepito perez'}
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
                                    {"- Juan Latorre"}
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
                            {"- Oswaldo Navetty"}
                        </React.Fragment>
                    }
                />
            </ListItem>


            <ListItem alignItems="flex-start" component="a" href="/meeting-access">
                <ListItemAvatar>
                    <Avatar alt="Eci"/>
                </ListItemAvatar>
                <ListItemText
                    primary="Escuela Colombiana de Ingenieria Julio Garavito"
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                02/03/2019 1:00 pm
                            </Typography>
                            {"- Oswaldo Navetty"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <ListItem alignItems="flex-start" component="a" href="/meeting-access">
                <ListItemAvatar>
                    <Avatar alt="BBVA" />
                </ListItemAvatar>
                <ListItemText
                    primary="BBVA"
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                25/02/2019 11:00 am
                            </Typography>
                            {"- Juan Latorre"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <ListItem alignItems="flex-start" component="a" href="/meeting-access">
                <ListItemAvatar>
                    <Avatar alt="PWC" />
                </ListItemAvatar>
                <ListItemText
                    primary="PriceWaters Coopers"
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                19/02/2019 1:00 pm
                            </Typography>
                            {'- Pepito perez'}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <ListItem alignItems="flex-start" component="a" href="/meeting-access">
                <ListItemAvatar>
                    <Avatar alt="Eci"/>
                </ListItemAvatar>
                <ListItemText
                    primary="Escuela Colombiana de Ingenieria Julio Garavito"
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                10/02/2019 2:00 am
                            </Typography>
                            {"- Oswaldo Navetty"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <ListItem alignItems="flex-start" component="a" href="/meeting-access">
                <ListItemAvatar>
                    <Avatar alt="BBVA" />
                </ListItemAvatar>
                <ListItemText
                    primary="BBVA"
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                02/02/2019 10:00 am
                            </Typography>
                            {"- Juan Latorre"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <ListItem alignItems="flex-start" component="a" href="/meeting-access">
                <ListItemAvatar>
                    <Avatar alt="PWC" />
                </ListItemAvatar>
                <ListItemText
                    primary="PriceWaters Coopers"
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                20/01/2019 9:00 am
                            </Typography>
                            {'- Pepito perez'}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <ListItem alignItems="flex-start" component="a" href="/meeting-access">
                <ListItemAvatar>
                    <Avatar alt="Eci"/>
                </ListItemAvatar>
                <ListItemText
                    primary="Escuela Colombiana de Ingenieria Julio Garavito"
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                15/01/2019 3:30 pm
                            </Typography>
                            {"- Oswaldo Navetty"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <ListItem alignItems="flex-start" component="a" href="/meeting-access">
                <ListItemAvatar>
                    <Avatar alt="BBVA" />
                </ListItemAvatar>
                <ListItemText
                    primary="BBVA"
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                02/01/2019 10:00 am
                            </Typography>
                            {"- Juan Latorre"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <ListItem alignItems="flex-start" component="a" href="/meeting-access">
                <ListItemAvatar>
                    <Avatar alt="PWC" />
                </ListItemAvatar>
                <ListItemText
                    primary="PriceWaters Coopers"
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                02/12/2018 1:00 pm
                            </Typography>
                            {'- Pepito perez'}
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