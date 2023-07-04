import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Link, Outlet } from "react-router-dom"
import { TopNavbar } from "../TopNavBar";


export const StudentRoot = () => {
    const [divstyle] = useState({ "background-color": "#7BD5F5", "min-height": "280px" })
    const [txtsytyle] = useState({ "paddingLeft": 40, "textDecoration": "none" })
    return (

        <div>
            <TopNavbar />
            <div className="row">
                <div className="col-md-3" style={divstyle}>
                    <div>
                        <h3 style={txtsytyle}>Students Section</h3>
                        <ListGroup>
                            <ListGroup.Item><Link to="" style={txtsytyle}>Dashboard</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="profile" style={txtsytyle}>profile</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="exam" style={txtsytyle}>Exam</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="tutorial" style={txtsytyle}>Tutorial</Link></ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
                <div className="col-md-9">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default StudentRoot