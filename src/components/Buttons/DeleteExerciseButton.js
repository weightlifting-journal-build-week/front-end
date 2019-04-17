import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
        margin: '25px 0',
        backgroundColor: '#f50057',
        paddingLeft: 20,
        paddingRight: 0,
        margin: 0,
    },
    deleteIcon: {
        marginRight: theme.spacing.unit,
        color: 'white',
    },
    buttonContainer: {
        display: 'block',
        margin: '0 auto',
        textAlgin: 'center',
    }
});

function FloatingActionButtons(props) {
    const { classes } = props;
    return (
        <div className={classes.buttonContainer}>
            <Fab variant="extended" color="secondary" aria-label="Add" className={classes.fab}>
                <strong>Remove Exercise</strong>
                <IconButton aria-label="Delete">
                    <DeleteIcon
                        color="secondary"
                        fontSize="small"
                        className={classes.deleteIcon}
                        onClick={() => console.log('DeleteExerciseButton clicked')}
                    />
                </IconButton>
            </Fab>
        </div>
    );
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
