import React, { Component } from 'react';
import './App.css';
import Sound from './Sound/Sound';
import Timer from './Timer/Timer';
import TimerControllers from './TimerControllers/TimerControllers';
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Can's Pomodoro Timer</h1>
      <Timer/>
      <TimerControllers/>
      <Sound/>
      </div>
    );
  }
}

export default App;
