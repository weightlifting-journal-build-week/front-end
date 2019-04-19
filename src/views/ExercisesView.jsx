import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { withStyles } from '@material-ui/core/styles';

import ExerciseList from '../components/ExerciseList';
import { getExercises } from '../redux/actions';

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

const rows = []

class SimpleTable extends Component {
    componentDidMount() {
        this.props.getExercises(this.props.workout.id)
    }
    render() {
        return (
            <Card className={this.props.classes.card}>
                <Typography className={this.props.classes.date} variant="h5" gutterBottom>
                    {this.props.workout.name}    {this.props.workout.date}
                </Typography>
                <ExerciseList workoutExercises={this.props.exercises.flat().filter(
                    exercise => exercise.workout_id === this.props.workout.id)}
                />
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return ({
        exercises: state.exercises
    })
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    { getExercises }
)(withStyles(styles)(SimpleTable));
