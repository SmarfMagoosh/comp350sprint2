import Table from '../component/Table';
import React, { Component } from "react";
import {useNavigate} from "react-router-dom";

const View = () => {
    return (
        <div className="Home">
            <h4 class = "pad">My Schedule</h4>
            <Table></Table>
        </div>
    )
}

export default View
