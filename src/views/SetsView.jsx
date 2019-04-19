import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {getSets} from '../redux/actions';
import SetsList from '../components/SetsList';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class SimpleTable extends Component {
  componentDidMount(){
    this.props.getSets(this.props.exerciseID)
  }
  
  render() {
  const { classes } = this.props;
  const exerciseSets = this.props.sets.filter(exerciseSet => 
      exerciseSet[0].exercise_id === this.props.exerciseID
    ).flat();
    
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Set Number</TableCell>
              <TableCell align="right">
                Number of Reps
              </TableCell>
              <TableCell align="right">
                Weight(lbs)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exerciseSets.map((set,index) => (
              <TableRow key={set.id}>
                <TableCell 
                  component="th" 
                  scope="row"
                >
                  {index+1}
                </TableCell>
                <TableCell align="right">
                  {set.reps}
                </TableCell>
                <TableCell align="right">
                  {set.weight}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return({
    getSets: state.getSets,
    sets: state.sets
  })
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  {getSets}
)(withStyles(styles)(SimpleTable)); 
