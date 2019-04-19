import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        overflowX: 'auto',
    },
    table: {
        minWidth: 400,
    },
});

// function createData(exercise, lbs, sets) {
//     return { exercise, lbs, sets };
// }

const rows = [
];

class SimpleTable extends Component {
    render() {
        return (
            <Paper className={this.props.classes.root}>
                <Table className={this.props.classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Exercise</TableCell>
                            <TableCell align="right">Target Area</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.workoutExercises.map(exercise => (
                            <TableRow key={exercise.id}>
                                <TableCell component="th" scope="row">
                                    {exercise.name}
                                </TableCell>
                                <TableCell align="right">{exercise.targetArea}</TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return ({
        gettingExercises: state.gettingExercises,
        exercises: state.exercises
    })
}

export default connect(
    mapStateToProps,
    null
)(withStyles(styles)(SimpleTable));
