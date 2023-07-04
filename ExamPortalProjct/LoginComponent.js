import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const navigate = useNavigate();
    const txtuser = useRef();
    const txtpassword = useRef();
    const [msg, setMessage] = useState("");
    const CheckLogin = () => {
        var u = txtuser.current.value;
        var p = txtpassword.current.value;
        if (u === "admin" && p === "admin") {
            navigate("/admin/")
        }
        else {
            setMessage("Invalid User Name and Password");
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4" >
                    <div className="m-4">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="inputEmail" >User Name/ Email Address</label>
                            <input type="text" className="form-control" ref={txtuser} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="inputPassword" >Password</label>
                            <input type="password" className="form-control" ref={txtpassword} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={() => CheckLogin()} >Sign in</button>
                    </div>
                    <h2>{msg}</h2>
                </div>
            </div>
        </div>
    )
}
export default Login;