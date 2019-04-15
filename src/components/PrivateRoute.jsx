import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({
  component: Component, 
  token, 
  errorStatusCode,
  ...rest}) => {
  return(
    <Route 
      {...rest} 
      redner={props => 
          token && errorStatusCode !== 403 ? (
            <Component {...props}/>
          ) : (
            <Redirect to ='/login' />    
          )
      }
    />
  );
}

const mapStateToProps = (state) => {
  return (
    token: state.token,
    errorStatusCode: state.errorStatusCode 
  );
}

export default withRouter(connect(
  mapStateToProps,
  {}
)(PrivateRoute));
