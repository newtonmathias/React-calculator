import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons'
import Display from './components/Display'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <Display />
          <Buttons />
        </div>
      </div>
    );
  }
}

export default App;
