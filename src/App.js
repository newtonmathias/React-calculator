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
  }
  inputDigit (e){
    const {displayValue} = this.state;
    this.setState({
      displayValue : displayValue === "0" ? e.target.value: displayValue + e.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <Display displayValue = {this.state.displayValue}/>
          <Buttons inputDigit={this.inputDigit}/>
        </div>
      </div>
    );
  }
}

export default App;
