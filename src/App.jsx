import React, { Component } from 'react';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Weight Lifting Journal</h1>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/protected' component={} />
      </div>
    );
  }
}

export default App;
