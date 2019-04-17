import React, { Component } from 'react';
import VolOn from './vol.png';
import VolOff from './voloff.png';


export default class Sound extends Component {


  toggleSound = (e) => {
    this.props.sound === "on" ?
    this.changeSoundAttributes("off",
      VolOff, e) :
    this.changeSoundAttributes("on",
      VolOn, e)
  }

  changeSoundAttributes = ( toggle, src, e) => {
      this.props.setSound(toggle)
      e.target.src = src
  }

  render() {
    return (
        <button
         onClick={(e) => {
           this.toggleSound(e)}}>
        <img style={{width:"30px"}} src={VolOn}/>
        </button>
    )
  }
}
