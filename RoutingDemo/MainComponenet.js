import React, { useState } from "react";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactusComponent";
import Service from "./ServiceComponent";
import Staff from "./AboutStaffComponenet";
import Company from "./AboutCompanyComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const MainCom = () => {
    const [divstyle] = useState({ "min-height": "500px", "width": "100%" });

    return (
        <div>
            <Router>

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarCollapse2">
                            <div className="navbar-nav">
                                <Link to="/home" className="nav-item nav-link active">Home</Link>
                                &nbsp;
                                <Link to="/about" className="nav-item nav-link">About</Link>
                                &nbsp;
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                                &nbsp;
                                <Link to="/service" className="nav-item nav-link">Service</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <hr />
                <div style={divstyle}>
                    <div className="row">
                        <div className="col-md-3">
                            <ul class="list-group">
                                <li class="list-group-item"><Link to="/home">Home</Link></li>
                                <li class="list-group-item"> <Link to="/about">About</Link></li>
                                <li class="list-group-item"><Link to="/contact">Contact</Link></li>
                                <li class="list-group-item"><Link to="/service">Service</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <Routes>
                                <Route path="home" element={<Home />} />
                                <Route path="about" element={<About />}>
                                    <Route path="staff" element={<Staff />} />
                                    <Route path="company" element={<Company />} />
                                </Route>
                                <Route path="contact" element={<Contact />} />
                                <Route path="service" element={<Service />} />
                            </Routes>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    footer sections
                </div>
            </Router>
        </div>
    )
}
export default MainCom;