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
import AddSetButton from './Buttons/AddSetButton';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import NewExerciseButton from './Buttons/NewExerciseButton';
import DeleteExerciseButton from './Buttons/DeleteExerciseButton';

const styles = theme => ({
    root: {
        overflowX: 'auto',
        margin: '40px 0',
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
});

class SimpleTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sets: [
                { set: 1, lbs: '', reps: '' },
            ],
            exercise: '',
            exerciseCardIndex: this.props.index,
            totalWeight: 0,
        }
    }

    newSet = () => {
        const newSet = { set: this.state.sets.length + 1, lbs: '', reps: '' }
        this.props.sets([...this.state.sets, newSet], this.state.exerciseCardIndex);
        this.setState((state, props) => ({
            sets: [...this.state.sets, newSet]
        }));
    }

    deleteSet = id => {
        const removeSet = this.state.sets.filter(item => item.set !== id);
        this.props.sets(removeSet.map((set, index) => ({ set: index + 1, lbs: set.lbs, reps: set.reps })), this.state.exerciseCardIndex);
        this.setState({
            sets: removeSet.map((set, index) => ({ set: index + 1, lbs: set.lbs, reps: set.reps })),
            totalWeight: this.state.totalWeight - this.state.sets.filter(item => item.set === id)[0].lbs * this.state.sets.filter(item => item.set === id)[0].reps,
        })
        console.log('deleteSet weight', this.state.sets.filter(item => item.set === id)[0].lbs * this.state.sets.filter(item => item.set === id)[0].reps);
    }

    handleWeightChange = (event, index) => {
        this.setState({
            sets: [
                ...this.state.sets.slice(0, index),
                { set: index + 1, lbs: event.target.value, reps: this.state.sets[index].reps },
                ...this.state.sets.slice(index + 1, this.state.sets.length)
            ],
            totalWeight: this.state.sets.length === 1 ? (event.target.value * this.state.sets[index].lbs) : [...this.state.sets.slice(0, index), ...this.state.sets.slice(index + 1, this.state.sets.length)].map(set => set.lbs * set.reps).reduce((acc, val) => acc + val) + (event.target.value * this.state.sets[index].reps),
        });
        this.props.lbs(this.state.totalWeight, index, this.state.exerciseCardIndex)
    }

    handleRepChange = (event, index) => {
        this.setState({
            sets: [
                ...this.state.sets.slice(0, index),
                { set: index + 1, lbs: this.state.sets[index].lbs, reps: event.target.value },
                ...this.state.sets.slice(index + 1, this.state.sets.length)
            ],
            totalWeight: this.state.sets.length === 1 ? (event.target.value * this.state.sets[index].lbs) : [...this.state.sets.slice(0, index), ...this.state.sets.slice(index + 1, this.state.sets.length)].map(set => set.lbs * set.reps).reduce((acc, val) => acc + val) + (event.target.value * this.state.sets[index].lbs)
            // currentSetWeight: event.target.value * this.state.sets[index].lbs,
            // + (event.target.value * this.state.sets[index].lbs) + this.state.sets.slice(index + 1, this.state.sets.length).map(set => set.lbs * set.reps).reduce((acc, val) => acc + val),
        });
        this.props.reps(event.target.value, index, this.state.exerciseCardIndex);
    }

    newExercise = () => {
        console.log('newExercise');
    }

    selectExercise = exercise => {
        this.setState({ exercise: exercise });
        this.props.exercise(exercise, this.state.exerciseCardIndex);
    }

    deleteExercise = () => {
        this.props.deleteExercise(this.state.exerciseCardIndex);
    }

    render() {
        return (
            <Paper className={this.props.classes.root}>
                <ExerciseSelector
                    className={this.props.classes.exerciseSelector}
                    exercise={this.selectExercise}
                    index={this.props.index}
                />
                <div style={{ display: 'flex', justifyContent: 'center', margin: 20 }}>
                    {this.state.totalWeight === 0 ? null :
                        <Typography variant="title">
                            {this.state.totalWeight > 100 ? <span> 💪 </span> : null}
                            {this.state.totalWeight > 200 ? <span> 💪 </span> : null}
                            {this.state.totalWeight > 500 ? <span> 💪 </span> : null}
                            Total Weight {this.state.totalWeight} lbs
                            {this.state.totalWeight > 100 ? <span> 💪 </span> : null}
                            {this.state.totalWeight > 200 ? <span> 💪 </span> : null}
                            {this.state.totalWeight > 500 ? <span> 💪 </span> : null}
                        </Typography>}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }} onClick={() => this.deleteExercise()}>
                    <DeleteExerciseButton />
                </div>
                <Table className={this.props.classes.table}>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">Set</TableCell>
                            <TableCell align="left">lbs</TableCell>
                            <TableCell align="left">reps</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                        {this.state.sets.map((row, index) => (
                            <TableRow key={row.set}>
                                <TableCell component="th" scope="row">
                                    {row.set}
                                </TableCell>
                                <TableCell align="left">
                                    <TextField
                                        id="lbs"
                                        name="lbs"
                                        type="number"
                                        className={this.props.classes.textField}
                                        margin="small"
                                        variant="standard"
                                        placeholder={row.lbs}
                                        fullWidth="false"
                                        margin="dense"
                                        style={{ width: '2.5rem' }}
                                        value={this.state.sets[index].lbs}
                                        onChange={event => this.handleWeightChange(event, index)}
                                    />
                                </TableCell>
                                <TableCell align="left">
                                    <TextField
                                        id="reps"
                                        name="reps"
                                        type="number"
                                        className={this.props.classes.textField}
                                        margin="small"
                                        variant="standard"
                                        placeholder={row.reps}
                                        fullWidth="false"
                                        margin="dense"
                                        style={{ width: '2.5rem' }}
                                        value={this.state.sets[index].reps}
                                        onChange={event => this.handleRepChange(event, index)}
                                    />
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="Delete" className={this.props.classes.margin}>
                                        <DeleteIcon
                                            color="secondary"
                                            fontSize="small"
                                            className={this.props.classes.rightIcon}
                                            onClick={() => this.deleteSet(row.set)}
                                        />
                                    </IconButton>
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
            </Paper >
        );
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
