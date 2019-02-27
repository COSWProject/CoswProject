import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
});

function AlignItemsList(props) {
    const { classes } = props;
    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
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
            <ListItem alignItems="flex-start">
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
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="PWC" />
                </ListItemAvatar>
                <ListItemText
                    primary="PriceWaters Coopers"
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                02/03/2019 1:00 pm
                            </Typography>
                            {'- Pepito perez'}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}

AlignItemsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);
