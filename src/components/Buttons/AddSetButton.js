import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
        margin: '25px 0',
        backgroundColor: '#03a9f4',
    },
    addIcon: {
        marginRight: theme.spacing.unit,
    },
    buttonContainer: {
        display: 'block',
        margin: '0 auto',
        textAlgin: 'center'
    }
});

function FloatingActionButtons(props) {
    const { classes } = props;
    return (
        <div className={classes.buttonContainer}>
            <Fab variant="extended" color="primary" aria-label="Add" className={classes.fab}>
                <AddIcon className={classes.addIcon} />
                <strong>Add Set</strong>
            </Fab>
        </div>
    );
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
