import React, { Component } from 'react'
import "./About.css";
//import Card from '../component/Card';
import instance from '../component/api/axios-config';

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




      </div>

  </div>
      </div>
    )
  }
}