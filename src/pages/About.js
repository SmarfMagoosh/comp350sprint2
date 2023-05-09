import React, { Component } from 'react'
import "./About.css";
//import Schedule from '../pages/Home';
import instance from '../component/api/axios-config';

//import croppedprofile from "../assets/croppedprofile.jpg";

export default class About extends Component {
    constructor() {
      super()
        this.createSchedule = this.createSchedule.bind(this)
    }

    createSchedule(event) {
        let name = document.getElementById("schedName").value;
        let schedule = {
          "name": name,
          "term": "",
          "courses": []
        };
        return new Schedule(schedule);
    }



  render() {
    return (
      <div>
        <div>
          <div class = "centered"></div>
        </div>
        <div class = "centered">
          <div class = "name_title">
            My Schedules
          </div>
          <h5>Create Schedule</h5>
          <label>Schedule Name: </label>
          <input type = "text" name = "sched" id = "schedName"></input>
          <div>
            <button onClick= { this.createSchedule }>Create Schedule</button>
            <div class = "padsm"></div>
          </div>
          <div>
         
          </div>
        </div>
      </div>
    )
  }
}