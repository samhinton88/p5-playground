import React, { Component } from 'react';
import Suite from './components/Suite';
import { test } from './sketches';
import './App.css';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <Suite sketch={test} sketchName={'Stationary sphere'}/>
      </div>
    );
  }
}

export default App;
