import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons'
import Display from './components/Display'


class App extends Component {
  constructor(){
    super();
    this.state = {
      value: null,
      displayValue: "0",
      waitingForOperand: false,
      operator: null
    }
    this.inputDigit = this.inputDigit.bind(this)
    this.inputDot = this.inputDot.bind(this)
    this.reset = this.reset.bind(this)
    this.operate = this.operate.bind(this)
    this.inputPercent = this.inputPercent.bind(this)
    this.toggleSign = this.toggleSign.bind(this)
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
  inputPercent() {
    const { displayValue } = this.state
    const currentValue = parseFloat(displayValue)
    
    if (currentValue === 0)
      return
    
    const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
    const newValue = parseFloat(displayValue) / 100
    
    this.setState({
      displayValue: String(newValue.toFixed(fixedDigits.length + 2))
    })
  }
    
  toggleSign() {
    const { displayValue } = this.state
    const newValue = parseFloat(displayValue) * -1
    
    this.setState({
      displayValue: String(newValue)
    })
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
      value: null,
      displayValue: "0",
      waitingForOperand: false,
      operator: null
    })
  }
  operate (e){
    const { displayValue, operator, value } = this.state;
    const nextValue = parseFloat(displayValue)

    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (prevValue, nextValue) => nextValue
    }

    if (value == null) {
      this.setState({
        value: nextValue
      })
    } else if (operator) {
      const currentValue = value || 0
      const computedValue = operations[operator](currentValue, nextValue)

      this.setState({
        value: computedValue,
        displayValue: String(computedValue)
      })
    }
    this.setState({
      waitingForOperand: true,
      operator: e.target.value
    })
  }
  render() {
    return (
        <div className="calculator">
          <Display displayValue = {this.state.displayValue}/>
          <Buttons inputDigit = {this.inputDigit} 
                   inputDot = {this.inputDot}
                   reset = {this.reset}
                   operate = {this.operate}
                   inputPercent = {this.inputPercent}
                   toggleSign = {this.toggleSign}/>
        </div>
    );
  }
}

export default App;
