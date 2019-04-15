import React from 'react';
import PropTypes from 'prop-types';

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

let id = 0;
function createData(exercise, lbs, reps) {
    id += 1;
    return { id, exercise, lbs, reps };
}

const rows = [
    createData('Set', 'lbs', 'reps'),
    createData('1', '', ''),
    createData('2', 155, 5),
    createData('3', 90, 5),
    createData('4', 120, 8),
    createData('5', 115, 8),
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                    </TableRow>
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
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
