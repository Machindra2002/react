import axios from "axios";
import React, { useEffect, useState } from "react";
export const StudentProfile=()=>
{
    const [student,setStudent]=useState({})
    useEffect(function(){
        let sid=localStorage.getItem("student_id");
        axios({ 
            url:"http://localhost:9090/api/getstudentdetailbyid/"+sid,
            method:"get",
            contentType:"application/json"
        }).then(e=>{
            console.log(e)
            setStudent(e.data)
        })

    },[])
    return(
        <div>
            <div className="card border-primary mb-3" style={{"max-width": "30rem"}}>
                <div className="card-header bg-info"><h4>Your Information</h4></div>
                    <div className="card-body text-dark">
                        <h5 className="card-title">Student Name: {student.student_name}</h5><br/>
                        <h6>Student id: {student.student_id}</h6><br/>
                        <h6>Student qualification: {student.qualification}</h6><br/>
                        <h6>Student Mobile Number: {student.mobile}</h6><br/>
                        <h6>Student Email Address: {student.email_address}</h6><br/>
                        <h6>Student City: {student.city}</h6><br/>
                    </div>
            </div>

        </div>
    )
}