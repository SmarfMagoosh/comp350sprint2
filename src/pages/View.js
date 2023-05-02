import Table from '../component/Table';
import React, { Component } from "react";
import {useNavigate} from "react-router-dom";
import {DayPilot, DayPilotCalendar} from "@daypilot/daypilot-lite-react";

const View = () => {
    return (
        <div className="Home">
            <h4 class = "pad">My Schedule</h4>

            <DayPilotCalendar
                  viewType={"WorkWeek"}
             />


        </div>
    )
}

export default View
