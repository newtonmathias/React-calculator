import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons'
import Display from './components/Display'


class App extends Component {
  constructor(){
    super();
    this.state = {
      displayValue: "0",
      waitingForOperand: false,
      operator: null
    }
    this.inputDigit = this.inputDigit.bind(this)
    this.inputDot = this.inputDot.bind(this)
    this.reset = this.reset.bind(this)
    this.operate = this.operate.bind(this)
  }
  inputDigit (e){
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand){
      this.setState({
        displayValue:  e.target.value,
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue : displayValue === "0" ? e.target.value: displayValue + e.target.value
      });
    }

  }
  inputDot (e){
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand){
      this.setState({
        displayValue: e.target.value,
        waitingForOperand: false
      })

    } else if (displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue : displayValue + e.target.value,
        waitingForOperand : false
      })
    }
  }
  reset (){
    this.setState({
      displayValue : '0'
    })
  }
  operate (e){
    const { displayValue } = this.state;

    const operatorations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (prevValue, nextValue) => nextValue
    }
    this.setState({
      waitingForOperand: true,
      operator: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <Display displayValue = {this.state.displayValue}/>
          <Buttons inputDigit = {this.inputDigit} 
                   inputDot = {this.inputDot}
                   reset = {this.reset}
                   operate = {this.operate}/>
        </div>
      </div>
    );
  }
}

export default App;
