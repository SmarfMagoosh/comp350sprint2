import React, { Component } from "react";
import "../pages/Home.css";
import instance from '../component/api/axios-config';

const userId = 2;

function equals(l1, l2) {
  if (l1.length != l2.length) {
    return false;
  }
  return l1[0] == l2[0] && l1[1] == l2[1];
}

function includes(list, listoflist) {
  for (let l of listoflist) {
    if(equals(list, l)) {
      return true;
    }
  }
  return false;
}

function courseTime(course) {
  if (course === undefined) {
    return "ERROR";
  } else {
    let meetDays = ["M", "T", "W", "R", "F"].filter(day => course.time[day].length > 0);
    let meetTimes = [];
    meetDays.forEach(day => {
      if (!includes(course.time[day], meetTimes)) {
        meetTimes.push(course.time[day]);
      }
    });
  }
}

function parseTime(ts) {
  if (ts == "") {
    return -1;
  }
  let components = ts.split(" ");
  let time = components[0].split(":");
  let hr = parseInt(time[0])
  hr += (time.length > 1) ? parseInt(time[1]) / 60.0 : 0
  return hr + ((components[1] == "AM") ? 0 : 12);
}

function overlap(course1, course2) {
  for (let day of ["M", "T", "W", "R", "F"]) {
    if (course1.time[day].length == 0 || course2.time[day].length == 0) {
      continue;
    } else {
      let t1 = [parseTime(course1.time[day][0]), parseTime(course1.time[day][1])];
      let t2 = [parseTime(course2.time[day][0]), parseTime(course2.time[day][1])];
      if(t1[0] > t2[1] || t2[0] > t1[1]) {
        continue;
      } else {
        return true;
      }
    }
  }
  return false;
}

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

class Home extends Component {
  constructor() {
    super();
    this.state = {
      schedule: null,
      schedules: [],
      courses: [],
      term: "",
      title: "",
      prof: "",
      dept: "",
      min: 100,
      max: 488,
      credits: -1,
      id: 2,
      name: "Evan"
    };
    this.updatefilters = this.updatefilters.bind(this);
    this.searchedCourse = this.searchedCourse.bind(this);
    this.addCourse = this.addCourse.bind(this);
    this.getSchedule = this.getSchedule.bind(this);
    this.renameSchedule = this.renameSchedule.bind(this);
    this.removeCourse = this.removeCourse.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:8080/schedules?id=${this.state.id}`)
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(data => this.setState({ schedules: data }));

    fetch("http://localhost:8080/courses")
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(data => this.setState({ courses: data }))
  }

  updatefilters(input) {
    if (input.target.name == "course search") {
      this.setState({ title: input.target.value.toLowerCase() })
    } else if (input.target.name == "prof search") {
      this.setState({ prof: input.target.value.toLowerCase() })
    } else if (input.target.name == "min") {
      this.setState({ min: (input.target.value < 100) ? 100 : Math.floor(input.target.value )})
    } else if (input.target.name == "max") {
      this.setState({ max: (input.target.value > 488) ? 488 : input.target.value })
    } else if (input.target.name == "dept") {
      this.setState({ dept: input.target.value.toLowerCase() })
    } else if (input.target.name == "credits") {
      this.setState({ credits: input.target.value == "" ? -1 : Math.floor(input.target.value) });
    }
  }

  searchedCourse(course) {
    let term = course.term == this.state.term || this.state.term == "";
    let title = course.title.toLowerCase().includes(this.state.title);
    let prof = course.prof.toLowerCase().includes(this.state.prof);
    let num = (
      () => {
        let code = course.code.split(" ")[1];
        if (this.state.min <= this.state.max) {
          return this.state.min <= code && this.state.max >= code;
        } else {
          return this.state.max <= code && this.state.min >= code;
        }
      }
    )()
    let dept = course.code.split(" ")[0].toLowerCase().includes(this.state.dept)
    let credits = course.credits == this.state.credits || this.state.credits == -1;
    return term && title && prof && num && dept && credits;    
  }

  addCourse(event) {
    try {
      this.state.schedule.addCourse(this.state.courses[event.target.id]);
    } catch(error) {
      // TODO actually handle error
      console.log(error.message) // TODO remove this when error is properly handled
    }
    this.setState({ schedule: this.state.schedule })
  }

  getSchedule(event) {
    fetch(`http://localhost:8080/getSchedule?id=${this.state.id}&name=${event.target.value}`)
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(data => this.setState({ schedule: new Schedule(data) }));
  }

  renameSchedule(event) {
    this.state.schedule.rename(event.target.value);
  }

  removeCourse(event) {
    this.state.schedule.removeCourse(this.state.courses[event.target.id]);
    this.setState({ schedule: this.state.schedule });
  }

  render() {
    let filtCourses = this.state.courses.filter(course => this.searchedCourse(course));
    return (
      <div className="Home">
        <h1 class = "pad">Scheduler Application </h1>
        <div>
        <div>
        <h5>Create Schedule</h5>
            <label>Schedule Name: </label>
                    <input type = "text" name = "sch" ></input>
             <div>
            <label>Term: </label>
            <input type = "text" name = "sch" ></input>
             </div>
           <button onClick = { this.addCourse }>Create Schedule</button>
           <div class ="padsm"> </div>
        </div>
        <div>

          </div>

          <select onChange = { this.getSchedule } id = "schedule">
            <option>Select a Schedule</option>
            { this.state.schedules.map(sched => <option> {sched} </option>) }
          </select>
        </div>
        <form action="/" method="get">
          <div>
            <label for="course-search">Search Courses: </label>
            <input 
            type = "text"
            id = "course-search"
            name = "course search"
            onChange = { this.updatefilters }/>
          </div>
          <div>
            <label for="prof-search">Search for a Professor: </label>
            <input 
            type = "text"
            id = "prof-search"
            name = "prof search"
            onChange = { this.updatefilters }/>
          </div>
          <div>
            <div>
              <label>Course Code Minimum: </label>
              <input type = "number" value = "100" name = "min" min = "100" max = "488" onInput= { this.updatefilters }></input>
            </div>
            <div>
              <label>Course Code Maximum: </label>
              <input type = "number" value = "488" name = "max" min = "100" max = "488" onInput= { this.updatefilters }></input>
            </div>
          </div>
          <div>
            <label>Department: </label>
            <input type = "text" name = "dept" onChange= { this.updatefilters }></input>
          </div>
          <div>
            <label>Credits: </label>
            <input type = "number" name = "credits" min = "0" max = "4" onInput= { this.updatefilters }></input>
          </div>
        </form>
        {
          this.state.schedule === null ? <div></div> : (
            <div>
              <label>Name: </label>
              <input type = "text" defaultValue = { this.state.schedule.name } onInput = { this.renameSchedule }></input>
              <table>
          <thead>
            <tr>
              <td></td>
              <td>Code</td>
              <td>Section</td>
              <td>Title</td>
              <td>Professor</td>
              <td>Credits</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            { this.state.schedule.courses.map(course => {
              return (
              <tr>
                <td><button id = { this.state.courses.indexOf(course) } onClick = { this.removeCourse }>Remove</button></td>
                <td>{course.code.split(" ").slice(0,2).join(" ")}</td>
                <td>{course.code.split(" ")[2]}</td>
                <td>{course.title}</td>
                <td>{course.prof}</td>
                <td>{course.credits}</td>
                <td>{courseTime(course)}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
            </div>
          )
        }
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Code</td>
              <td>Section</td>
              <td>Title</td>
              <td>Professor</td>
              <td>Credits</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            {filtCourses.map(course => {
              return (
              <tr>
                <td>
                  { document.getElementById("schedule").value == "Select a Schedule" ? 
                  "" : 
                  <button id = { this.state.courses.indexOf(course) } onClick = { this.addCourse }>Add</button>}
                </td>
                <td>{course.code.split(" ").slice(0,2).join(" ")}</td>
                <td>{course.code.split(" ")[2]}</td>
                <td>{course.title}</td>
                <td>{course.prof}</td>
                <td>{course.credits}</td>
                <td>{courseTime(course)}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;