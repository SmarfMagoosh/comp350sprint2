import React, { Component } from 'react';
import "../pages/View.css";

class Table extends Component {

 getSchedule(event) {
    fetch(`http://localhost:8080/getSchedule?id=${this.state.id}&name=${event.target.value}`)
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(data => this.setState({ schedule: new Schedule(data) }));
  }

  state = {
    data: [
      { id: 1, title: "Computer Architecture", day: 'MWF', time: 3 },
      { id: 2, title: "Computer Architecture", day: 'MWF', time: 4 },
      { id: 3, title: "Computer Architecture", day: 'MWF', time: 10},
      { id: 4, title: "Computer Architecture", day: 'MWF', time: 11},
      { id: 5, title: "Computer Architecture", day: 'MWF', time: 6 }
    ]
  };

  render() {
    return (
<div class="row justify-content-center">
    <div class="col-auto">
      <table class="table table-responsive table-striped table-dark">
        <thead >
          <tr>
            <th>Class #</th>
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

export default Table;
