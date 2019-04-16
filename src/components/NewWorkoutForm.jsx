import React, { Component } from 'react';
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
    },
    addSetButton: {
        border: '1px sold red',
    }
});

let id = 0;
function createData(set, lbs, reps) {
    id += 1;
    return { set, lbs, reps };
}

const sets = [
    createData('1', '', ''),
    createData('2', '', ''),
    createData('3', '', ''),
];

class SimpleTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sets: [
                { set: 1, lbs: 45, reps: 5 },
                { set: 2, lbs: 95, reps: 5 },
                { set: 3, lbs: 135, reps: 5 }
            ],
            currentSet: {
                set: '',
                lbs: '',
                reps: ''
            }
        }
    }

    newSet = () => {
        const newSet = { set: this.state.sets.length + 1, lbs: '', reps: '' }
        this.setState((state, props) => ({
            sets: [...this.state.sets, newSet]
        }))
        console.log('this.state: ', this.state);
    }

    deleteSet = id => {
        const removeSet = this.state.sets.filter(item => item.set !== id);
        this.setState({ sets: removeSet.map((set, index) => ({ set: index + 1, lbs: set.lbs, reps: set.reps })) })
    }

    render() {
        return (
            <Paper className={this.props.classes.root}>
                <ExerciseSelector className={this.props.classes.exerciseSelector} />
                <Table className={this.props.classes.table}>
                    <TableHead>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Set
                                </TableCell>
                            <TableCell align="right">lbs</TableCell>
                            <TableCell align="right">reps</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>

                        {this.state.sets.map(row => (
                            <TableRow key={row.set}>
                                <TableCell component="th" scope="row">
                                    {row.set}
                                </TableCell>
                                <TableCell align="right">{row.lbs}</TableCell>
                                <TableCell align="right">{row.reps}</TableCell>
                                <TableCell align="right">
                                    <button onClick={() => this.deleteSet(row.set)}>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className={this.props.classes.addSetContainer}>
                    <div onClick={() => this.newSet()}>
                        <AddSetButton />
                    </div>
                </div>
            </Paper>
        );
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
