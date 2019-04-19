import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ExercisesView from '../views/ExercisesView';

const styles = theme => ({
    root: {
        width: '65%',
        margin: '0 auto'
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
class ControlledExpansionPanels extends Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        event.preventDefault();
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { expanded } = this.state;

        return (
            <div className={this.props.classes.root}>
                {this.props.workouts.map((workout, index) => (
                    <ExpansionPanel
                        expanded={expanded === `panel${index + 1}`}
                        onChange={this.handleChange(`panel${index + 1}`)}
                    >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={this.props.classes.heading}>
                                {workout.date}
                            </Typography>
                            <Typography className={this.props.classes.secondaryHeading}>
                                {workout.name}
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <ExercisesView key={workout.id + index} workoutID={workout.id} />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))}
            </div>
        );
    }
}

ControlledExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);
