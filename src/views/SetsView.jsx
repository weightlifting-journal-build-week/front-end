import React, {Component} from 'react';

import SetsList from '../components/SetsList';

class SetsView extends Component {
  render(){
    return(
      <div className="sets-view">
        <SetsList />
      </div>
    )
  }
}

export default SetsView;
