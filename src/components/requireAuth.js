import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {

        componentDidMount() {
            this.shouldNavigateAway();
        }
    
        componentDidUpdate() {
            this.shouldNavigateAway();
        }
    
        shouldNavigateAway() {
            const { auth, history } = this.props;
            if(!auth) {
                history.push('/login');
            }
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    const mapStateToProps = (state) => {
        return {
            loggingIn: state.loggingIn
        }
    }

    return connect(mapStateToProps)(ComposedComponent);
};