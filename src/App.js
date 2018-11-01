import React, { Component } from 'react';
import Suite from './components/Suite';
import { test, directionalLight, circleCluster, simulateParticleSystem, text } from './sketches';
import './App.css';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <Suite sketch={text} sketchName={'Text'}/>
      </div>
    );
  }
}

export default App;
