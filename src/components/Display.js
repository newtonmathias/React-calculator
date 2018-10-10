import React, { Component } from 'react'

class Display extends Component {
  render() {
    let {displayValue} = this.props;
    return (
      <div className="display">
        <p>{displayValue}</p>
      </div>
    )
  }
}

export default Display;