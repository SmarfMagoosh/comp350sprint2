import React, { Component } from 'react'
import "./About.css";
//import croppedprofile from "../assets/croppedprofile.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
    <div class="split left">
      <div className="centered">
        <img
          className="profile_image"
          // Image goes here
          alt="Pic"
          // src = {croppedprofile}
          >

          </img>
      </div>
    </div>
    <div className="split right">
     <div className="centered">
	        <div className="name_title">VIEW</div>
        <div className="brief_description">
          show stuff
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}