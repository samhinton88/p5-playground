import React, { Component } from 'react';
import './style.css';

class Log extends Component {
  handleOutput = () => {
    const { output } = this.props;

    if (!output) { return }

    return Object.keys(output).map((propName) => {
      return (
        <li className='log-output-item'>
          <span>{propName}:</span>
          <span>{JSON.stringify(output[propName])}</span>
        </li>
      )
    })
  }

  renderHeader = () => {
    return this.props.title;
  }
  
  render() {
    return (
      <div className='log'>
        <h2 className='log-header'>{ this.renderHeader() }</h2>
        <ol>{ this.handleOutput() }</ol>
      </div>
    )
  }
}

export default Log;

