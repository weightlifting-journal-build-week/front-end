import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/CheckCircleOutline';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
        margin: '25px 0',
    },
    addIcon: {
        marginRight: theme.spacing.unit,
    },
    buttonContainer: {
        display: 'inline-flex',
        justifyContent: 'center',
    }
});

function FloatingActionButtons(props) {
    const { classes } = props;
    return (
        <div className={classes.buttonContainer}>
            <Fab variant="extended" color="secondary" aria-label="Add" className={classes.fab}>
                <CheckIcon className={classes.addIcon} />
                <strong>Finish Workout</strong>
            </Fab>
        </div>
    );
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
