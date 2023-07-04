import React from "react";
import axios from "axios";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";


export const Main = () => {
   
    return (

        <div style={{widows:"100%" , height:"100%"}}>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">Welcome</a>
                    <div class="navbar-nav ms-auto">
                        <a href="#" className="nav-item nav-link">Login Out</a>
                    </div>
                </div>
            </nav>
            <center>
                <h3>Student Registration</h3>
            </center>

            <div className="row" style={{margin:"10px 10px",borderRadius:"2px solid red"}}>
                <nav className="nav nav-tabs">
                    <a href="#" className="nav-item nav-link active">
                        <i className="bi-house-door"></i> Student Information
                    </a>
                    <a href="#" className="nav-item nav-link disabled">
                        <i className="bi-bar-chart"></i> Registration Details
                    </a>
                    <a href="#" className="nav-item nav-link disabled" tabindex="-1">
                        <i className="bi-bar-chart"></i> Payment Details
                    </a>
                </nav>
                <h4>Student Profile</h4>
                <div className="input-group col-md-12">
                    <div className="col-md-12">
                        &nbsp;&nbsp;
                        <input type="text" className="col-md-3" placeholder="First name" />
                        &nbsp;&nbsp;
                        <input type="text" className="col-md-3" placeholder="Middle name" />
                        &nbsp;&nbsp;
                        <input type="text" className="col-md-3" placeholder="Last name" />
                        &nbsp;&nbsp;
                        <input type="date" className="col-md-2" />
                    </div>

                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <div className="col-md-12">
                        &nbsp;&nbsp;
                        <input type="text" className="col-md-5" placeholder="Enter your email" />
                        &nbsp;&nbsp;
                        <input type="text" className="col-md-3" placeholder="Mobile Number" />
                        &nbsp;&nbsp;
                        <input type="text" className="col-md-3" placeholder="Alternate Mobile Number" />
                    </div>
                    {/* &nbsp;&nbsp; &nbsp;&nbsp;
                    <div>
                        <select ref={ddstate} onChange={() => GetStateWiseCities()}>
                            <option selected disabled>select state</option>
                            {
                                states.map((d, k) => (
                                    <option key={k} value={d.state_id}>{d.state_name}</option>
                                ))
                            }
                        </select>
                    </div> */}
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <div className="col-md-12">
                        &nbsp;&nbsp;
                        <textarea rows="3 auto" cols="70" placeholder="Enter Local Address" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <textarea rows="3 auto" cols="70" placeholder="Enter Perment Address" />
                    </div>
                </div>

            </div>

            <div>

            </div>

        </div>
    )
}