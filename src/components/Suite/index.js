import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Log from '../Log';
import ControlPanel from '../ControlPanel';
import { test } from '../../sketches';


class Suite extends Component {
  state = { 
    time: 0,
    rate: 0.5,
    scale: 100,
    coords: { x: 0, y: 0, z: 0 },
    rotateX: 0,
    rotateY: 0,
    sketchName: 'sphere',
    xLightPos: 0,
    yLightPos: 0
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
      // attribute is nested 
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
    const { sketch, sketchName } = this.props;

    return (
      <div className="App">
        <Log output={this.state} title={sketchName} ignore={['time']}></Log>
        <P5Wrapper 
          sketch={sketch} 
          {...this.state}
        />
        <ul>
          <ControlPanel attributes={this.state} cb={this.handleCommand} blocked={['time', 'sketchName']}/>
        </ul>
        <div>
          <input onChange={({target: {value }}) => this.setState({xLightPos: Number(value)})}></input>
          <input onChange={({target: {value }}) => this.setState({yLightPos: Number(value)})}></input>

        </div>
      </div>
    );
  }
}

export default Suite;
