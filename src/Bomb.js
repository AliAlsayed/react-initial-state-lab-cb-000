// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render(){
    return(
      <div>
        <p>{secondsLeft > 0 ? `${secondsLeft} seconds left before I go boom!` : 'Boom!'}</p>
      </div>
    )
  }
}
