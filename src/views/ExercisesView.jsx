import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import ExerciseList from '../components/ExerciseList';
import {getExercises} from '../redux/actions';

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

class SimpleTable extends Component {
  componentDidMount(){
    this.props.getExercises(this.props.workout.id)
  }
  render(){
    return (
        <Card className={this.props.classes.card}>
          <Typography className={this.props.classes.date} variant="h5" gutterBottom>
              {this.props.workout.name}    {this.props.workout.date}
          </Typography>
          <ExerciseList exercises={this.props.exercises}/>  
        </Card>
    );
  }
}

const mapStateToProps = ({exercises}) => (
  exercises
)

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  {getExercises}
)(withStyles(styles)(SimpleTable));
