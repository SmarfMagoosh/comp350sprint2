import React, { Component } from "react";
import "../pages/Home.css";
import Search from '../component/Search';
import SearchBar from '../component/SearchBar';
import Dropdown from '../component/Dropdown';

class Home extends Component {
  // Create a default state of this component
  constructor() {
    super();
    this.state = {
      courses: [],
      term: "",
      title: "",
      prof: "",
      dept: "",
      min: 0,
      max: 488,
    };
    this.updatefilters = this.updatefilters.bind(this);
    this.searchedCourse = this.searchedCourse.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/courses')
    .then(response => {
      if (response.ok) { return response.json(); } 
      else { return Promise.reject(response); }
    })
    .then(courseList => this.setState({ courses: courseList}))
  }

  updatefilters(input) {
    if (input.target.name == "term") {
      this.setState({ term: (input.target.value == "Fall") ? "F20": "S21" })
    } else if (input.target.name == "course search") {
      this.setState({ title: input.target.value.toLowerCase() })
    } else if (input.target.name == "prof search") {
      this.setState({ prof: input.target.value.toLowerCase() })
    } else if (input.target.name == "min") {
      this.setState({ min: (input.target.value < 0) ? 0 : Math.floor(input.target.value )})
    } else if (input.target.name == "max") {
      this.setState({ max: (input.target.value > 488) ? 488 : input.target.value })
    } else if (input.target.name == "dept") {
      this.setState({ dept: input.target.value.toLowerCase() })
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
    return term && title && prof && num && dept;    
  }

  greet() {
    console.log("hello world");
  }
  
  render() {
    let filtCourses = this.state.courses.filter(course => this.searchedCourse(course));
    console.log(filtCourses.length);
    return (
      <div className="Home">
        <h1 class = "pad">Scheduler Application </h1>
        <Dropdown/>
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
                <input type = "radio" name = "term" value = "Fall" onInput={ this.updatefilters }></input>
                <label>Fall</label>
            </div>
            <div>
                <input type = "radio" name = "term" value = "Spring" onInput={ this.updatefilters }></input>
                <label>Spring</label>
            </div>
          </div>
          <div>
            <div>
              <label>Min: </label>
              <input type = "number" name = "min" min = "0" max = "488" onInput= { this.updatefilters }></input>
            </div>
            <div>
              <label>Max: </label>
              <input type = "number" name = "max" min = "0" max = "488" onInput= { this.updatefilters }></input>
            </div>
          </div>
          <div>
            <label>Department: </label>
            <input type = "text" name = "dept" onChange= { this.updatefilters }></input>
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Term</td>
              <td>Code</td>
              <td>Section</td>
              <td>Title</td>
              <td>Professor</td>
              <td>Credits</td>
            </tr>
          </thead>
          <tbody>
            {filtCourses.map(course => {
              return (
              <tr>
                <td><button onClick={ this.greet }>Add</button></td>
                <td>{(course.term == "F20") ? "Fall" : "Spring"}</td>
                <td>{course.code.split(" ").slice(0,2).join(" ")}</td>
                <td>{course.code.split(" ")[2]}</td>
                <td>{course.title}</td>
                <td>{course.prof}</td>
                <td>{course.credits}</td>
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