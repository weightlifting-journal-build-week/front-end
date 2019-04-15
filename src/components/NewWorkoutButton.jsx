import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
        marginTop: 25,
    },
    addIcon: {
        marginRight: theme.spacing.unit,
    },
});

function FloatingActionButtons(props) {
    const { classes } = props;
    return (
        <div>
            <Fab variant="extended" color="secondary" aria-label="Add" className={classes.fab}>
                <AddIcon className={classes.addIcon} />
                <strong>New Workout</strong>
            </Fab>
        </div>
    );
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
