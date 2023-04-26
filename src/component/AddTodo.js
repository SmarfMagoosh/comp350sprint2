import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import { DesktopDatePicker , LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { render, fireEvent } from "@testing-library/react";


class AddTodo extends Component {
    constructor() {
    super();
    this.state = {
      content: "",
      date: "",
      due: null,
    };
  }


  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      date: Date().toLocaleString('en-US')
    });
  };

  //
  handleDueDate = (event) => {
    this.setState({

      due: new Date(event).toLocaleString('en-US')

    });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.content.trim()) {
      this.props.addTodo(this.state);
      this.setState({
        content: "",
        date: null
      });
    }
  };

  render() {
    return (

      <div>
        <TextField
          label="Add New Item"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.content}
        />

  <LocalizationProvider dateAdapter={AdapterDateFns}>
       <DesktopDatePicker
            onSubmit = {this.due = null}
            id="new-item-date"
            label="Due Date"
            value={this.state.due}
            onChange={this.handleDueDate} //should allow you to input due date
            renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>

        <Button data-testid = "new-item-button"
          style={{ marginLeft: "10px" }}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </div>
    );
  }
}

export default AddTodo;
