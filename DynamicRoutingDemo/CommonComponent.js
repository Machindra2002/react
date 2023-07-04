import React, { useState } from "react";
import { Home } from "./HomeComponent";
import { About } from "./AboutComponent";
import { Login } from "./LoginComponent";
import { Main } from "./MainComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Common = () => {

    const [divstyle] = useState({ "min-height": "500%" });
    return (
        <div>
            <Router>
                <div style={divstyle}>
                    <Routes>
                        <Route path="" element={<Login />} />
                        <Route path="main" element={<Main />}>
                            <Route path="home" element={<Home />} />
                            <Route path="about us" element={<About />} />
                        </Route>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}