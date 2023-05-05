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
    this.state = {
      viewType: "WorkWeek",
      durationBarVisible: false,

      eventDeleteHandling: "Update",
      onEventClick: async args => {
        const dp = this.calendar;

      },
    };
  }

  get calendar() {
    return this.calendarRef.current.control;
  }

  componentDidMount() {
    const days = {
        m: "2023-03-07",
        m: "2023-03-07",
        t: "2023-03-08",
        w: "2023-03-09",
        r: "2023-03-10",
        f: "2023-03-11"
    }

    //get courses from schedule and put them in here
    //loop?
    const events = [
      {
        id: 1,
        text: "Course 1",
        start: "2023-03-07T10:00:00",
        end: "2023-03-07T11:00:00"
      },
      {
        id: 2,
        text: "Course 2",
        start: "2023-03-08T09:30:00",
        end: "2023-03-08T11:30:00",
        backColor: "#6aa84f"
      },
      {
        id: 3,
        text: "Course 3",
        start: "2023-03-08T12:00:00",
        end: "2023-03-08T15:00:00",
        backColor: "#f1c232"
      },
      {
        id: 4,
        text: "Course 4",
        start: "2023-03-06T11:30:00",
        end: "2023-03-06T14:30:00",
        backColor: "#cc4125"
      },
    ];

    const startDate = "2023-03-08";

    this.calendar.update({startDate, events});

  }

  render() {
    return (
      <div style={styles.wrap}>
        <div style={styles.left}>

        </div>
        <div style={styles.main}>
          <DayPilotCalendar
            {...this.state}
            ref={this.calendarRef}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;