import React, { Component } from 'react'

export default class BreakController extends Component {

  handleBreakIncrement = () => {
    this.props.incrementBreakTime()
  }


  handleBreakDecrement = () => {
    this.props.decrementBreakTime()
  }

  render() {
    return (
      <div id="break">
        <p>BREAK</p>
        <button onClick={this.handleBreakDecrement}> - </button>
        <span> {this.props.breakTime} </span>
        <button onClick={this.handleBreakIncrement}> + </button>
      </div>
    )
  }
}
