import axios from "axios";
import React, { useRef, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import "./Login.css"
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
export const Login = () => {
  const uname = useRef();
  const pass = useRef();
  const navigate = useNavigate();
  const [msg, setMessage] = useState("")

  const [imgstyle] = useState({ "box-shadow": "rgb(0 0 0 / 16%) 1px 1px 10px" })

  const CheckLogin = () => {
    var u = uname.current.value;
    var p = pass.current.value;
    var st = { "username": u, "password": p };
    axios({
      url: "http://localhost:9090/api/login",
      method: 'post',
      data: st,
      contentType: 'application/json'
    }).then(e => {
      // console.log(e)
      if (e.data == "") {
        setMessage = alert("incorrect password")
      }
      else {

        // setMessage("Login successful")
        var d = e.data;
        // localStorage
        console.log(d)
        localStorage.setItem("student_id", d.student_id);
        // localStorage.setItem("student_name",d.student_name);
        // localStorage.setItem("qualification",d.qualification);
        // localStorage.setItem("mobile",d.mobile);
        // localStorage.setItem("email_address",d.email_address);
        // localStorage.setItem("city",d.city);
        navigate("/student/profile/")
      }
    })
  }

  const Mynavigation = () => {
    console.log("ganesh shid")
    navigate("/register")
    return (

      <div>

      </div>
    )
  }
  return (
    <div id="ganesh"  >
      <div className="row" >
      <div className="col-md-6 top-50" >
        <img src="https://img.freepik.com/free-vector/business-people-work-together-office-meeting-corporate-employees-talking-about-tasks-boss-sitting-with-laptop-young-secretary-smiling-standing-near-desk-with-report-documents_575670-872.jpg?w=996&t=st=1678076843~exp=1678077443~hmac=2e501182d2a3ca369314e0857ac8ac3c9cb4c4d0738a5c8f518580bbf0c7f96c" alt="office image" width="500px" className="im" />
      </div>

      <div className="col-md-4 im">


        <Card className="shadow-lg " >
          <Card.Header>please Login Here</Card.Header>
          <Card.Body>
            <Form >
              <div className="row" >
                <div className="col-md-12" >
                  <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" ref={uname} />
                  </Form.Group>
                </div>
                <div className="col-md-12" >
                  <Form.Group >
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={pass} />
                  </Form.Group>
                </div>
              </div>

            </Form>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="submit" onClick={() => CheckLogin()}>LogIn</Button>
            <h5>Not an Acount. <Button variant="link" type="submit" onClick={() => navigate("/register")}>register here</Button></h5>
          </Card.Footer>
        </Card>







        {/* <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input type="text" className="form-control mt-1" placeholder="Enter email" ref={uname}/>
              </div>
              <div className="form-group mt-3">
                <input type="password" className="form-control mt-1" placeholder="Enter password" ref={pass}/>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="button" className="btn btn-primary" onClick={()=>CheckLogin()}>
                  Submit
                </button>
             </div>
             <div className="form-group mt-3">
             <label><h5>Not an Acount.</h5></label><input type="button" className="btn btn-link text-decoration-none" value="sigh up" onClick={()=>Mynavigation()} />
              </div>
            </div>
              <h4>{msg}</h4>
          </form> */}
      </div>
      </div>
    </div>

  )
}

export default Login;