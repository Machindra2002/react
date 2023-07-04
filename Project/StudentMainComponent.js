import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";


export const StudentMain = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        CIIT
                        {/* <img src="https://sulcdn.azureedge.net/biz-live/img/-ciit-training-institute--5176421-9de26f53.jpeg" height="28" alt="CoolBrand"> */}
                    </a>
                    <div className="navbar-nav ms-auto">
                        <a href="#" class="nav-item nav-link">Login</a>
                    </div>
                </div>
            </nav>
            <div className="row">
                <div className="col-md-3">
                    <div className="container">
                        <h3>Student Section</h3>
                         <ul className="list-group" style={{ fontSize: "15px", fontFamily: "serif" }}>
                            <li className="list-group-item"><Link to="studentdashboard">StudentDashboard</Link></li>
                            <li className="list-group-item"><Link to="profile">Profile</Link></li>
                            <li className="list-group-item"><Link to="allexam">AllExam</Link></li>
                            <li className="list-group-item"><Link to="studenttutorial">StudentTutorial</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    <Outlet />
                </div>
            </div>



        </div>

    )
}