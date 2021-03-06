import React, { Component } from 'react';
import WorkController from '../WorkController/WorkController';
import BreakController from '../BreakController/BreakController';

export default class TimerControllers extends Component {
  render() {
    return (
      <div>
      <WorkController
        workTime={this.props.workTime}
        incrementWorkTime={this.props.incrementWorkTime}
        decrementWorkTime={this.props.decrementWorkTime}
        />
      <BreakController
        breakTime={this.props.breakTime}
        incrementBreakTime={this.props.incrementBreakTime}
        decrementBreakTime={this.props.decrementBreakTime}
        />
      </div>
    )
  }
}
