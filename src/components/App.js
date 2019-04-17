import React, { Component } from 'react';
import './App.scss';
import Sound from './Sound/Sound';
import Timer from './Timer/Timer';
import TimerControllers from './TimerControllers/TimerControllers';

class App extends Component {
  constructor () {
    super()
    this.state = {
      timerId: 0,
      timerRunning: false,
      currentTime: "25 : 00",
      cycle: "Session",
      workTime: 25,
      breakTime: 5,
      sound: "on"
    }
  }

  incrementWorkTime = () => {
    this.setState({
      workTime : this.state.workTime + 1
    })
  }
  
  decrementWorkTime = () => {
    this.setState({
      workTime : this.state.workTime - 1
    })
  }
  
  incrementBreakTime = () => {
    this.setState({
      breakTime : this.state.breakTime + 1
    })
  }
  
  decrementBreakTime = () => {
    this.setState({
      breakTime : this.state.breakTime - 1
    })
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
      <Timer 
        cycle={this.state.cycle}
        currentTime={this.state.currentTime}
        timerRunning={this.props.timerRunning}/>
      <TimerControllers
        workTime={this.state.workTime}
        breakTime={this.state.breakTime}
        incrementWorkTime={this.incrementWorkTime}
        decrementWorkTime={this.decrementWorkTime}
        incrementBreakTime={this.incrementBreakTime}
        decrementBreakTime={this.decrementBreakTime}
        />
      <Sound setSound={this.setSound} sound={this.state.sound}/>
      </div>
    );
  }
}

export default App;
