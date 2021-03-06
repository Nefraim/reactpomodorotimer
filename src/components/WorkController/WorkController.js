import React, { Component } from 'react'

export default class WorkController extends Component {

  

  handleWorkIncrement = () => {
    this.props.incrementWorkTime()
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.workTime)
    }
  }

  handleWorkDecrement = () => {
    this.props.decrementWorkTime()
    if (this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.workTime)
    }
  }

  
  render() {
    return (
      <div id="count">
        <p>SESSION</p>
        <button onClick={this.handleWorkDecrement}> - </button>
        <span> {this.props.workTime} </span>
        <button onClick={this.handleWorkIncrement}> + </button>
      </div>
    )
  }
}
