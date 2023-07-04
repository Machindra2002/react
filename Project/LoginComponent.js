import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const user_name = useRef("");
    const password = useRef("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const CheckLogin = () => {
        var name = user_name.current.value;
        var pass = password.current.value;

        if (name == "admin" && pass == "admin") {
            // setMessage("Login successfully")
            navigate("/main")
        }
        else{
            var st = { "student_code": name, "password": pass }
            axios({
                url: 'http://localhost:9090/api/checklogin',
                method: 'post',
                data: st,
            }).then((e) => {
                if (e.data != "") {
                    localStorage.setItem("student_id", e.student_id);
                    navigate("/studentmain")
                }
                else {
                    setMessage("Inavalid user name & password")
                }
                console.log(e.data);
            })

        }

    }

    return (
        <div>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>User Name</td>
                        <td><input type="text" ref={user_name} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="text" ref={password} /></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="Login" onClick={() => CheckLogin()} /></td>
                    </tr>
                </tbody>
            </table>
            <h3>{message}</h3>
        </div>
    )
}