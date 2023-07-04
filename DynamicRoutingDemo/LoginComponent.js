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
        if(name == "abc" && pass == "1234"){
            // setMessage("Login successfully")
            navigate("/main")
        }
        else{
            setMessage("Inavalid user name & password")

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