import React, { Component } from 'react';
import WorkController from '../WorkController/WorkController';
import BreakController from '../BreakController/BreakController';

export default class TimerControllers extends Component {
  render() {
    return (
      <div>
      <WorkController/>
      <BreakController/>
      </div>
    )
  }
}
