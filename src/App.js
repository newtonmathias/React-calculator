import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons'
import Display from './components/Display'


class App extends Component {
  constructor(){
    super();
    this.state = {
      displayValue: "0"
    }
    this.inputDigit = this.inputDigit.bind(this)
    this.inputDot = this.inputDot.bind(this)
    this.reset = this.reset.bind(this)
  }
  inputDigit (e){
    const {displayValue} = this.state;
    this.setState({
      displayValue : displayValue === "0" ? e.target.value: displayValue + e.target.value
    });
  }
  inputDot (e){
    const {displayValue} = this.state;

    if (displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue : displayValue + e.target.value
      })
    }
  }
  reset (){
    this.setState({
      displayValue : '0'
    })
  }
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <Display displayValue = {this.state.displayValue}/>
          <Buttons inputDigit = {this.inputDigit} 
                   inputDot = {this.inputDot}
                   reset = {this.reset}/>
        </div>
      </div>
    );
  }
}

export default App;
