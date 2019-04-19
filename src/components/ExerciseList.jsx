import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

import SetsView from '../views/SetsView';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});
class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
          {this.props.workoutExercises.map((exercise,index) => (        
            <ExpansionPanel 
              expanded={expanded === `panel${index+1}`} 
              onChange={this.handleChange(`panel${index+1}`)}
            >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {exercise.name} 
              </Typography>
              <Typography className={classes.secondaryHeading}>
                {exercise.targetArea} 
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SetsView exerciseID={exercise.id}/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    exercises: state.exercises
  })
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(ControlledExpansionPanels)
);
