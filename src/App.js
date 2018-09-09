import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons'
import Display from './components/Display'


class App extends Component {
  constructor(){
    super();

    this.state ={
      result: ""
    }
  }
  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    }catch (e) {
      this.setState({
        result: "error"
      })

    }
  };
  handleClick = button => {
    switch(button) {
      case "=": this.calculate();
      break;
      case "C": this.reset();
      break;
      default: this.setState({
        result : this.state.result + button
      })
      break;
    }
  }
  reset = () => {
    this.setState({
      result : ''
    })
  };
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <Display result = {this.state.result}/>
          <Buttons onClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;
