import React, { Component } from 'react';
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

// function createData(exercise, lbs, sets) {
//     return { exercise, lbs, sets };
// }

const rows = [
];

class SimpleTable extends Component {
    componentDidMount() {
        { console.log('Exercise List props', this.props) }
        // this.props.exercises.map(exercise => {
        //     console.log(exercise.name)
        // })
    }

    render() {
        return (
            <Paper className={this.props.classes.root}>
                <Table className={this.props.classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Exercise</TableCell>
                            <TableCell align="right">lbs</TableCell>
                            <TableCell align="right">sets</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.exercise}
                                </TableCell>
                                <TableCell align="right">{row.lbs}</TableCell>
                                <TableCell align="right">{row.sets}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
