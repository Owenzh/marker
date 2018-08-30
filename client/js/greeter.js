import React, {Component} from 'react'

class Greeter extends Component{
  render() {
    return (
      <div>
        hi friends,here you are {this.props.name}.
      </div>
    );
  }
}

export default Greeter;