import React, { Component } from 'react'

class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <button id="clear" value="C" onClick={this.props.reset}>C</button>
        <button id="divide" value="/" onClick={this.props.operate}>/</button>
        <button id="multiply" value="*" onClick={this.props.operate}>x</button>
        <button id="subtract" value="-" onClick={this.props.operate}>-</button>
        <button id="seven" value="7" onClick={this.props.inputDigit}>7</button>
        <button id="eight" value="8"  onClick={this.props.inputDigit}>8</button>
        <button id="nine" value="9" onClick={this.props.inputDigit}>9</button>
        <button id="add" value="+" onClick={this.props.operate}>+</button>
        <button id="four" value="4" onClick={this.props.inputDigit}>4</button>
        <button id="five" value="5" onClick={this.props.inputDigit}>5</button>
        <button id="six" value="6" onClick={this.props.inputDigit}>6</button>
        <button id="equals" value="=" >=</button>
        <button id="one" value="1" onClick={this.props.inputDigit}>1</button>
        <button id="two" value="2" onClick={this.props.inputDigit}>2</button>
        <button id="three" value="3" onClick={this.props.inputDigit}>3</button>
        <button id="zero" value="0" onClick={this.props.inputDigit}>0</button>
        <button id="decimal" value="." onClick={this.props.inputDot}>.</button>
      </div>
    )
  }
}

export default Buttons;
