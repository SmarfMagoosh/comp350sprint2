import React, { Component } from 'react'
import "./About.css";
//import Schedule from '../pages/Home';
import instance from '../component/api/axios-config';

//import croppedprofile from "../assets/croppedprofile.jpg";

class Schedule {
  constructor(schedObj) {
    this.name = schedObj.name;
    this.term = schedObj.term;
    this.courses = schedObj.courses;
    this.rename.bind(this);
  }
  addCourse(course) {
    if (this.term == "") {
      this.term = course.term;
    }

    if (course.term != this.term) {
      throw new Error(`Based on other classes you have added,
      this schedules is for the ${(this.term == "F20") ? "fall" : "spring"}
      but the section of ${course.title} you selected is not offered in that term.`);
    } else if (this.courses.filter(addedCourse => addedCourse.title == course.title).length != 0) {
      throw new Error(`You already have a section of that course in your schedule!`);
    }

    for (let addedCourse of this.courses) {
      if (overlap(addedCourse, course)) {
        throw new Error(`${course.title} overlaps with ${addedCourse.title}, please remove one of those`);
      }
    }
    this.courses.push(course);
  }

  rename(newName) {
    this.name = newName;
  }

  removeCourse(obj) {
    this.courses.splice(this.courses.indexOf(obj), 1);
  }

  save() {
    // TODO communicate with backend
  }
}
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