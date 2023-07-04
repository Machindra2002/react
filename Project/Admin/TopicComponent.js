import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as allServices from "./allServices"

export const Topic = () => {

    // const topic_id = useRef();
    const topic_name = useRef();

    const [topics, setTopic] = useState([]);

    useEffect(function () {
        GetTopic();
    }, []);

    const AddTopic = async() => {
        const st = { "topic_name": topic_name.current.value };
        // axios({
        //     url: 'http://localhost:9090/api/topic',
        //     method: 'post',
        //     data: (st)
        // }).then(e => {
        //     console.log(e)
        //     alert("Topic Add Successfully");
        //     Clear();
        //     GetTopic();
        // })
        const res = await allServices.addTopic(st)
        alert("Topic Add Successfully");
        GetTopic();
        Clear();

    }

    const GetTopic = async() => {
        // axios({
        //     url: 'http://localhost:9090/api/topic',
        //     method: 'get',
        //     contentType: 'application/json'
        // }).then(e => {
        //     // console.log(e)
        //     setTopic(e.data)
        // })
        const res = await allServices.getTopic()
        setTopic(res);
    }

    const Clear=()=>{
        topic_name.current.value="";
    }

    const DeleteTopic=async(tid)=>{
        const res = await allServices.deleteTopic(tid)
        GetTopic();
    }

    return (
        <div>
            <div>
                <h2>Topic Content</h2>
                <div>
                    <table>
                        <thead>
                            {/* <tr>
                                <th>Topic Id</th>
                                <th><input type="text" ref={topic_id} /></th>
                            </tr> */}
                            <tr>
                                <th>Topic Name</th>
                                <th><input type="text" ref={topic_name} /></th>
                            </tr>
                            <tr>
                                <th><input type="button" value="submit" className="btn btn-primary" onClick={() => AddTopic()} /></th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <br/>
                <div>
                    <table className="table table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Topic Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topics.map((d, k) => (
                                <tr key={k}>
                                    <td>{k + 1}</td>
                                    <td>{d.topic_name}</td>
                                    <td><input type="button" value="delete" onClick={()=>DeleteTopic(d.topic_id)}/></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}