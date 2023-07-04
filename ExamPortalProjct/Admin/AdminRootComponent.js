import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Link, Outlet } from "react-router-dom"
import { TopNavbar } from "../TopNavBar";


export const AdminRoot = () => {
    const [divstyle] = useState({ "background-color": "#7BD5F5", "min-height": "500px" })
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
                            <ListGroup.Item><Link to="student" style={txtsytyle}>Student</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="exam" style={txtsytyle}>Exam</Link></ListGroup.Item>
                        </ListGroup>
                    </div>
                    <hr />
                    <br />
                    <div>
                        <h3 style={txtsytyle}>Master Section</h3>
                        <ListGroup>
                            <ListGroup.Item><Link to="topic" style={txtsytyle}>Topic</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="topic-content" style={txtsytyle}>Content</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="content-question" style={txtsytyle}>Content Question</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="question-level" style={txtsytyle}>Question level</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="role" style={txtsytyle}>Role</Link></ListGroup.Item>
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

export default AdminRoot;