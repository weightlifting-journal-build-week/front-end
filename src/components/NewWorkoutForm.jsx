import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { withStyles } from '@material-ui/core/styles';
import ExerciseSelector from './ExerciseSelector';
import AddSetButton from './AddSetButton';

const styles = theme => ({
    root: {
        overflowX: 'auto',
    },
    table: {
        minWidth: 400,
    },
    tableHead: {
        border: '1px solid red',
        width: '100%',
    },
    exerciseSelector: {
        width: '80%',
    },
    addSetContainer: {
        display: 'flex',
        justifyContent: 'center',
    }
});

let id = 0;
function createData(exercise, lbs, reps) {
    id += 1;
    return { id, exercise, lbs, reps };
}

const rows = [
    createData('Set', 'lbs', 'reps'),
    createData('', '', ''),
    createData('Bench Press', 155, 5, 37, 4.3),
    createData('Overhead Press', 90, 5, 24, 6.0),
    createData('Wide-Grip Lat Pulldown', 120, 8, 67, 4.3),
    createData('Front Squat', 115, 8, 49, 3.9),
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <ExerciseSelector className={classes.exerciseSelector} />
            <Table className={classes.table}>
                <TableHead>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.exercise}
                            </TableCell>
                            <TableCell align="right">{row.lbs}</TableCell>
                            <TableCell align="right">{row.reps}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.addSetContainer}>
                <AddSetButton className={classes.addSet} />
            </div>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
