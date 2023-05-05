import Calendar from '../component/Calendar';
import React, { Component } from "react";
import {useNavigate} from "react-router-dom";
import {DayPilot, DayPilotCalendar} from "@daypilot/daypilot-lite-react";

const View = () => {
    return (
        <div className="Home">
            <h1 class = "pad">Schedule Name</h1>
            <Calendar/>

        </div>
    )
}

export default View
