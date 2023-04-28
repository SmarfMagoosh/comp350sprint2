import React, { Component } from "react";


import "../pages/Home.css";
import Search from '../component/Search';
import SearchBar from '../component/SearchBar';
import Dropdown from '../component/Dropdown';

const courses = [
    { id: '12345', name: 'Course One' },
    { id: '22345', name: 'Course Two' },
    { id: '334536', name: 'Course Three' },
    { id: '42345', name: 'Course Four' },
];

class Home extends Component {
  // Create a default state of this component
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="Home">
        <h1 class = "pad">Scheduler Application </h1>
        <Dropdown/>
        <Search />

       <SearchBar />
            <ul>
                {courses.map((course) => (
                   <li key={course.id}>{course.name}</li>
               ))}
            </ul>

      </div>
    );
  }
}

export default Home;
