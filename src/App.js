import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Log from './components/Log';
import ControlPanel from './components/ControlPanel';
import { test } from './sketches';
import './App.css';

class App extends Component {
  state = { 
    time: 0,
    rate: 0.5,
    scale: 100,
    coords: { x: 0, y: 0, z: 0 },
    rotateX: 0,
    rotateY: 0,
    sketchName: 'sphere'
  }
  
  componentDidMount() {
    this.clock = setInterval(
      () => { 
        this.setState({ time: this.state.time + this.state.rate 
      })},
      16
    )
  }

  changeRate = (direction) => {
    const { rate } = this.state;
    this.setState({rate: rate + (direction * 0.25) })
  }

  changeScale = (direction) => {
    const { scale } = this.state;
    this.setState({ scale: scale + (direction * 1)})
  }

  handleCommand = (attrName, direction, parentAttr) => {
    let instruction, stateAttrVal;
    
    if (parentAttr) {
      stateAttrVal = this.state[parentAttr][attrName]
      const parentStateAttr = this.state[parentAttr]
      instruction = { [parentAttr]: {...parentStateAttr, [attrName]: stateAttrVal + (direction * 1)} }
    } else {
      stateAttrVal = this.state[attrName];
      instruction = { [attrName]: stateAttrVal + (direction * 1)}
    }
    this.setState(instruction)

  }

  render() {

    return (
      <div className="App">

        <Log output={this.state} title={this.state.sketchName}></Log>
        <P5Wrapper 
          sketch={test} 
          {...this.state}
        />
        <ul>
          <ControlPanel attributes={this.state} cb={this.handleCommand} blocked={['time', 'sketchName']}/>
        </ul>
      </div>
    );
  }
}

export default App;
