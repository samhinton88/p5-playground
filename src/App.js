import React, { Component } from 'react';
import Suite from './components/Suite';
import { test, directionalLight, circleCluster, simulateParticleSystem, text } from './sketches';
import './App.css';

class App extends Component {
  state = {
    sketches: [
      { name: "Text", sketch: text},
      { name: "Directional Light", sketch: directionalLight },
      { name: "Circle Cluster", sketch: circleCluster },
      { name: "Simulate Particle System", sketch: simulateParticleSystem },
      { name: "Test", sketch: test }
    ],
    activeSketch: { name: "Text", sketch: text }
  }

  handleSketchNameInput = ({target: { value: text }}) => {
    const { sketches } = this.state;
    console.log(sketches)
    console.log(text)

    const result = sketches.find((sketch) => {

      return sketch.name.toLowerCase() === text.toLowerCase()
    } );

    if (!result) { return }
    console.log(result)

    this.setState({ activeSketch: result });
  }
  
  render() {
    const { activeSketch: { name, sketch} } = this.state;

    return (
      <div className="App">
        <input className='sketch-name-input' onChange={this.handleSketchNameInput}/>
        <Suite sketch={sketch} sketchName={name}/>
      </div>
    );
  }
}

export default App;
