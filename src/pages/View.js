import Calendar from '../component/Calendar';
import React, { Component } from "react";
import {useNavigate} from "react-router-dom";
import {DayPilot, DayPilotCalendar} from "@daypilot/daypilot-lite-react";
import Table from '../component/Table';
import '../component/Table.css';

const View = () => {
    return (
        <div class="Home">
        <h1 class = "mdpd">View Schedules</h1>

        <label for="schedule-names" class = "smpd">Choose a schedule to view:</label>
            <select name="schedule-names" id="schedule-names">
                <option value="schedule-1">Schedule 1</option>
                <option value="schedule-2">Schedule 2</option>
                <option value="schedule-3">Schedule 3</option>
                <option value="schedule-4">Schedule 4</option>
            </select>

          <Table></Table>

        </div>
    )
}

export default View
