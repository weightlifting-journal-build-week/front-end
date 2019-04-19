import React, {Component} from 'react';
import {connect} from 'react-redux';
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

class SimpleTable extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <Paper className={this.props.classes.root}>
        <Table className={this.props.classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Set #</TableCell>
              <TableCell align="right"># of Reps</TableCell>
              <TableCell align="right">Weight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {this.props.sets.map((set, index) => (
                  <TableRow key={set.id}>
                      <TableCell component="th" scope="row">
                          {index+1}
                      </TableCell>
                      <TableCell component="th" scope="row">
                          {set.reps}
                      </TableCell>
                      <TableCell component="th" scope="row">
                         {set.weight}
                      </TableCell>
                      <TableCell align="right">{set.targetArea}</TableCell>
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

const mapStateToProps = state => {
  return ({
    exercises: state.exercises
  })
}

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(SimpleTable));
