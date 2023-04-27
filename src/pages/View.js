import Table from '../component/Table';
import React, { Component } from "react";

class View extends Component {

  // Create a default state of this component
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="Home">
        <h4 class = "pad">My Schedule</h4>
        <Table></Table>
      </div>
    );
  }
}

export default View;
