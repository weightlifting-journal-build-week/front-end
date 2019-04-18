import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
        margin: '20px 0',
        backgroundColor: '#f50057',
        paddingRight: 20,
        paddingLeft: 0,
        margin: 0,
    },
    deleteIcon: {
        marginRight: theme.spacing.unit,
        color: 'white',
        margin: 0,
        padding: 0,
    },
    buttonContainer: {
        display: 'block',
        margin: '0 auto',
        textAlgin: 'center',
    },
    iconButton: {
        paddingLeft: '10px',
        paddingRight: '5px',
        marginLeft: '5px',
        marginRight: '0',
    }
});

function FloatingActionButtons(props) {
    const { classes } = props;
    return (
        <div className={classes.buttonContainer}>
            <Fab variant="extended" color="secondary" aria-label="Add" className={classes.fab}>
                <IconButton aria-label="Delete" className={classes.iconButton}>
                    <DeleteIcon
                        color="secondary"
                        fontSize="small"
                        className={classes.deleteIcon}
                        onClick={() => console.log('DeleteExerciseButton clicked')}
                    />
                </IconButton>
                <strong>Remove Exercise</strong>
            </Fab>
        </div>
    );
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
