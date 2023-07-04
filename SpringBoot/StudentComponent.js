import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export const Student = () => {

    const [studentdata, setStudentData] = useState([]);

    const txtrno = useRef("");
    const txtname = useRef("");
    const txtenglish = useRef("");
    const txtmaths = useRef("");
    const txtscience = useRef("");

    useEffect(function () {
        GetStudent();
        // AddStudent();
    }, [])

    const GetStudent = () => {
        axios({
            url: 'http://localhost:9090/api/student',
            method: 'get',
            contentType: 'application/JSON'
        }).then(e => {
            console.log(e.data);
            setStudentData(e.data)
        })
    }

    const AddStudent = () => {
        const n = txtname.current.value;
        const e = txtenglish.current.value;
        const m = txtmaths.current.value;
        const s = txtscience.current.value;
        const st = { "name": n, "english": e, "maths": m, "science": s };
        axios({
            url: 'http://localhost:9090/api/student',
            method: 'POST',
            data: (st),
            contentType: 'application/json'
        }).then(e => {
            console.log(e);
            alert("Student Add Successfully");
            ClearData();
            GetStudent();
        })
    }

    const ViewStudent = (p) => {
        console.log(p);
        txtrno.current.value = p.rno;
        txtname.current.value = p.name;
        txtenglish.current.value = p.english;
        txtmaths.current.value = p.maths;
        txtscience.current.value = p.science;
    }

    const UpdateStudent = () => {
        const r = txtrno.current.value;
        const n = txtname.current.value;
        const e = txtenglish.current.value;
        const m = txtmaths.current.value;
        const s = txtscience.current.value;
        const st = { "rno": r, "name": n, "english": e, "maths": m, "science": s };
        axios({
            url: 'http://localhost:9090/api/student',
            method: 'put',
            data: (st),
            contentType: 'application/json'
        }).then(e => {
            console.log(e);
            alert("update student successfully");
            GetStudent();
        })
    }

    const DeleteStudent = (rno) => {
        axios({
            url: 'http://localhost:9090/api/student/' + rno,
            method: 'delete',
            contentType: 'application/json'
        }).then(e => {
            alert("Student Delete Successfully");
            GetStudent();
        })
    }

    const ClearData = () => {
        txtrno.current.value = "";
        txtname.current.value = "";
        txtenglish.current.value = "";
        txtmaths.current.value = "";
        txtscience.current.value = "";
    }
    return (
        <div>
            <h2> Student Operation</h2>
            <table>
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td>Roll No</td>
                        <td><input type="text" ref={txtrno} /></td>
                    </tr>
                    <tr>
                        <td>Studnet Name</td>
                        <td><input type="text" ref={txtname} /></td>
                    </tr>
                    <tr>
                        <td>English</td>
                        <td><input type="text" ref={txtenglish} /></td>
                    </tr>
                    <tr>
                        <td>Maths</td>
                        <td><input type="text" ref={txtmaths} /></td>
                    </tr>
                    <tr>
                        <td>Science</td>
                        <td><input type="text" ref={txtscience} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="button" value="submit" onClick={() => AddStudent()} />
                            &nbsp;&nbsp;
                            <input type="button" value="update" onClick={() => UpdateStudent()} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <table className="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                        <td>Roll No</td>
                        <td>Name</td>
                        <td>English</td>
                        <td>Maths</td>
                        <td>Science</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {studentdata.map((d, k) => (
                        <tr key={k}>
                            <td>{d.rno}</td>
                            <td>{d.name}</td>
                            <td>{d.english}</td>
                            <td>{d.maths}</td>
                            <td>{d.science}</td>
                            <td>
                                <input type="button" value="view" onClick={() => ViewStudent(d)} />
                                &nbsp;&nbsp;
                                <input type="button" value="delete" onClick={() => DeleteStudent(d.rno)} />
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}