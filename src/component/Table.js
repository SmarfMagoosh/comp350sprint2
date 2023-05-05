import React, { Component } from 'react';
import "../pages/View.css";

class Table extends Component {
  state = {
    data: [
      { id: 1, title: "Computer Architecture", day: 'MWF', time: 3 },

    ]
  };

  render() {
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

export default Table;
