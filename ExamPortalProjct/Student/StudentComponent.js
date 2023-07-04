import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
export const Student=()=>
{
    const[topicdata,setStudentData]=useState([]);
    const[show, setShow]=useState(false);

    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);

    const txtname=useRef();
    const txtqualification=useRef();
    const txtphone=useRef();
    const txtemail=useRef();
    const txtcity=useRef();
    const AddStudent=()=>
    {
        var ss={"student_name":txtname.current.value,"qualification":txtqualification.current.value,"mobile":txtphone.current.value,
                "email_address":txtemail.current.value,"city":txtcity.current.value};

                axios({
                    url:"http://localhost:9090/api/addstudentdetails",
                    method:'post',
                    data:ss,
                    contentType:'application/json'
                }).then((e)=>
                {
                    console.log(e);
                    
                })

    }

    useEffect(function()
    {
        FetchStudents();
    },[])

    const FetchStudents=()=>
    {
        axios({
            url:"http://localhost:9090/api/allstudentsdetails",
            method:'get',
            contentType:'application/json'
        }).then((e)=>
        {
            console.log(e.data);
            setStudentData(e.data);
        })
    }

    return(
        <div>
            <h4>Student Details</h4>
            <button className="btn btn-primary" onClick={handleShow}>Add Student</button>
            <br/><br/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header CloseButton>
                <Modal.Title>Student Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row" >
                    <div className="col-md-6" >
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name" ref={txtname} />
                    </div>
                    <div className="form-group">
                        <label>Qulification</label>
                        <input type="text" className="form-control" placeholder="Qualification" ref={txtqualification}/>
                    </div>
                    </div>
                    <div className="col-md-6" >
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control" placeholder="Pnone Number" ref={txtphone}/>
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="text" className="form-control" placeholder="Email Address" ref={txtemail}/>
                    </div>
                    </div>
                    <div className="form-group col-md-6 " >
                        <label>City</label>
                        <input type="text" className="form-control" placeholder="City" ref={txtcity}/>
                    </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        close 
                    </Button>
                    <Button variant="primary" onClick={()=>AddStudent()} >
                        Submit 
                    </Button>
                </Modal.Footer>
            </Modal>


            <table className="table table-bordered" >
            <thead>
                <tr>
                    <th>Sr no</th>
                    <th>Name</th>
                    <th>Qualification</th>
                    <th>Phone Number</th>
                    <th>Email Address</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {topicdata.map((d,k)=>(
                    <tr key={k}>
                        <td>{k+1}</td>
                        <td>{d.student_name}</td>
                        <td>{d.qualification}</td>
                        <td>{d.mobile}</td>
                        <td>{d.email_address}</td>
                        <td>{d.city}</td>
                        <td><button className="btn btn-info">Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}