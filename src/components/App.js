import React, { Component } from 'react';
import './App.css';
import Sound from './Sound/Sound';
import Timer from './Timer/Timer';
import TimerControllers from './TimerControllers/TimerControllers';
class App extends Component {
  constructor () {
    super()
    this.state = {
      cycle: "Session",
      workTime: 25,
      breakTime: 5,
      sound: "on"
    }
  }
    setSound = (sound) => {
      this.setState({
        sound: sound
      })
  }
  render() {
    return (
      <div className="App">
      <h1>Can's Pomodoro Timer</h1>
      <Timer/>
      <TimerControllers/>
      <Sound setSound={this.setSound} sound={this.state.sound}/>
      </div>
    );
  }
}

export default App;
