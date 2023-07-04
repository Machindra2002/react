import React, { useState } from "react";
import { Home } from "./HomeComponent";
import { About } from "./AboutComponent";
import { Login } from "./LoginComponent";
import { BrowserRouter as Router,Routes, Route,Link, Outlet } from "react-router-dom";

export const Main = () => {

    const [divstyle]=useState({"min-height":"500px"});
    return (
        <div>
                <div>
                    <Link to="home">Home</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="about us">About</Link>
                </div>
                <hr/>

                <div style={divstyle}>
                   <Outlet></Outlet>
                </div>

                <hr/>
                <div>
                    @Copywrite<a href="https://www.ciitinstitude.com" target="_blank">
                        CIIT Training Instituted</a>
                </div>
        </div>
    )
}