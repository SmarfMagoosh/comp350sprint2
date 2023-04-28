import React, { Component } from 'react'
import "./About.css";
import Card from '../component/Card';

//import croppedprofile from "../assets/croppedprofile.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>

      <div className="centered">
      </div>
     <div className="centered">
	        <div className="name_title">My Schedules</div>

          <Card
              title="Schedule Title"
              description="This is a description of the schedule"
              deleteb="delete schedule button goes here"
           />

      </div>
  </div>
      </div>
    )
  }
}