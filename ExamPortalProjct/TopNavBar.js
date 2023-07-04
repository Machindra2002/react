import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "./Student/LoginDemoComponent";
export const TopNavbar=()=>
{
    const navigate=useNavigate();
    const [bgstyle]=useState({"background-color":"#7BD5F5"})
    return(
        <div>
            <Navbar  style={bgstyle}>
                <Container>
                    <Navbar.Brand href="#">
                        <h2>Exam Portal</h2> 
                    </Navbar.Brand>
                    <div >
                        <input type="button" style={{"textDecoration":"none","fontSize":"25px"}} className="btn btn-link mt-4" value="Log Out" onClick={()=>navigate("/") } />
                    </div>        
                </Container>
            </Navbar>
            <hr/>
        </div>
    )
}