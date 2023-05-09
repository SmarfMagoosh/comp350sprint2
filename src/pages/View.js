import Calendar from '../component/Calendar';
import React, { Component } from "react";
import {useNavigate} from "react-router-dom";
import {DayPilot, DayPilotCalendar} from "@daypilot/daypilot-lite-react";

const View = () => {
    return (
        <div className="Home">
            <h1 class = "pad">Courses Calendar View</h1>

                        <h3> Monday &emsp; &emsp; &emsp;  Tuesday &emsp; &emsp;&emsp;    Wednesday &emsp; &emsp;  &emsp; Thursday &emsp; &emsp; &emsp;  Friday</h3>

                        <Calendar/>
        </div>
    )
}

export default View
