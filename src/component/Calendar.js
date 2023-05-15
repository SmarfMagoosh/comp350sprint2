import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "@daypilot/daypilot-lite-react";
import "./CalendarStyles.css";

//Daily Pilot Calendar
const styles = {
  wrap: {
    display: "flex"
  },
  left: {
    margin: "1px"
  },
  main: {
    flexGrow: "2"

  }
};

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
    this.control = React.createRef().current.control;
    this.state = {
      days: {
            M: "2023-03-07",
            T: "2023-03-08",
            W: "2023-03-09",
            R: "2023-03-10",
            F: "2023-03-11"
        },
      viewType: "WorkWeek",
      durationBarVisible: false,
      schedule: {
        courses: []
      },
      eventDeleteHandling: "Update",
      onEventClick: async args => {
        const dp = this.calendar;
      },
    };
    this.getSchedule = this.getSchedule.bind(this)
    this.createEvents = this.createEvents.bind(this)
    this.createEvents(this.state.schedule)
  }

  createEvents(schedule) {
    let events = [];
    const mt = time => {
      console.log(time)
      let hr = parseInt(time.split(":")[0]);
      let milHr = time.split(" ")[1] == "AM" ? hr : hr + 12;
      milHr = milHr == 24 ? 12 : milHr;
      let minSec = time.split(":").length > 1 ? time.split(":")[1].split(" ")[0] + ":00" : ":00:00";
      return `${milHr}:${minSec}`;
    }
    console.log(this.control);
    for (let course of schedule.courses) {
        for (let day in course.time) {
        console.log("here i am")
        console.log(this.state.days[day]);
          if (course.time[day].length > 0) {
            console.log(course)
            events.push({
              id: 1,
              text: course.title,
              start: `${this.state.days[day]}T${mt(course.time[day][0])}`,
              end: `${this.state.days[day]}T${mt(course.time[day][1])}`,
              backColor: "#880000"
            })
          }
        }
    }
    this.calendar.update({ startDate: "2023-03-07", events });
    // return meets;
  }

  getSchedule(event) {
    fetch(`http://localhost:8080/getSchedule?id=${this.state.id}&name=${event.target.value}`)
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(data => this.setState({ schedule: new Schedule(data) }));
  }

  get calendar() {
  console.log(this.calendarRef.current)
  return this.calendarRef.current.control;
  }

//  componentDidMount() {
    //get courses from schedule and put them in here
    //for each class in schedule 
    //assign id
    //query course title 
    //query times
    //assign color
//    const events = [
//      {
//        id: 1,
//        text: "Course 1",
//        start: "2023-03-07T10:00:00",
//        end: "2023-03-07T11:00:00"
//      },
//      {
//        id: 2,
//        text: "Course 2",
//        start: "2023-03-08T09:30:00",
//        end: "2023-03-08T11:30:00",
//        backColor: "#6aa84f"
//      },
//      {
//        id: 3,
//        text: "Course 3",
//        start: "2023-03-08T12:00:00",
//        end: "2023-03-08T15:00:00",
//        backColor: "#f1c232"
//      },
//      {
//        id: 4,
//        text: "Course 4",
//        start: "2023-03-06T11:30:00",
//        end: "2023-03-06T14:30:00",
//        backColor: "#cc4125"
//      },
//    ];
//
//    const startDate = "2023-03-08";
//
    //sthis.calendar.update({startDate, events});

 // }

  render() {
    console.log(this.state)
    return (
        <div class="row justify-content-center">
            <div class="col-auto">
              <table class="table table-responsive table-striped table-dark">
                <thead >
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Days</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.day}</td>
                      <td>{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
             </div>
            </div>
    );
  }
}

export default Calendar;