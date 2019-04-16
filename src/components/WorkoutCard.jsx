import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import WorkoutHistory from './WorkoutHistory';

const styles = theme => ({
    card: {
        minWidth: 500,
        width: '35%',
        margin: '0 auto',
        marginTop: theme.spacing.unit * 3,
    },
    date: {
        align: 'left',
        margin: 25,
    },
});

function SimpleCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
          <Typography className={classes.date} variant="h5" gutterBottom>
              {props.workout.date}
          </Typography>
          <WorkoutHistory workout={props.workout}/>
        </Card>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
