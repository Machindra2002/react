import axios from "axios";
import React, { useRef, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import "./Login.css"
import CardHeader from "react-bootstrap/esm/CardHeader";
export const Register = () => {

    const txtname = useRef();
    const txtqualification = useRef();
    const txtphone = useRef();
    const txtemail = useRef();
    const txtcity = useRef();
    const navigate = useNavigate();
    const [msg, setMessage] = useState("")

    const [imgstyle] = useState({ "box-shadow": "rgb(0 0 0 / 16%) 1px 1px 10px" })

    const AddData = () => {

        var name = txtname.current.value;
        var qualification = txtqualification.current.value;
        var phone = txtphone.current.value;
        var email = txtemail.current.value;
        var city = txtcity.current.value;

        if (name != "" && qualification != "" && phone != "" && email != "" && city != "") {
            alert("login successful")

            var ss = {
                "student_name": name, "qualification": qualification, "mobile": phone,
                "email_address": email, "city": city
            };

            axios({
                url: "http://localhost:9090/api/addstudentdetails",
                method: 'post',
                data: ss,
                contentType: 'application/json'
            }).then((e) => {
                console.log(e);

            })
            navigate("/")
        }
        else {
            alert("please fill all the information")
        }


        return (
            <div>

            </div>
        )
    }
    return (
        <div id="ganesh" >
            <div className="row" >
                <div className="col-md-6 top-50" >
                    <img src="https://img.freepik.com/free-vector/business-people-work-together-office-meeting-corporate-employees-talking-about-tasks-boss-sitting-with-laptop-young-secretary-smiling-standing-near-desk-with-report-documents_575670-872.jpg?w=996&t=st=1678076843~exp=1678077443~hmac=2e501182d2a3ca369314e0857ac8ac3c9cb4c4d0738a5c8f518580bbf0c7f96c" alt="office image" width="500px" className="im" />
                </div>

                <div className="col-md-4 im">
                    <Card className="shadow-lg " >
                        <Card.Header>please Registe Here</Card.Header>
                        <Card.Body>
                            <Form >
                                <div className="row" >
                                    <div className="col-md-12" >
                                        <Form.Group >
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Name" required ref={txtname} />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6" >
                                        <Form.Group >
                                            <Form.Label>phone</Form.Label>
                                            <Form.Control type="text" placeholder="Phone Number" required ref={txtphone} />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6" >
                                        <Form.Group  >
                                            <Form.Label>Qualification</Form.Label>
                                            <Form.Control type="text" placeholder="Quealification" required ref={txtqualification} />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6" >
                                        <Form.Group  >
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="Email" required ref={txtemail} />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6" >
                                        <Form.Group >
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text" placeholder="City" required ref={txtcity} />
                                        </Form.Group>
                                    </div>
                                </div>

                            </Form>
                        </Card.Body>
                        <Card.Footer> <Button variant="primary" type="submit" onClick={() => AddData()}>submit</Button><Button variant="link" type="submit" onClick={() =>navigate("/")}>back to login</Button> </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>

    )
}



