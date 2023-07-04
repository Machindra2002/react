import React, { useState,useEffect, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
export const TopicContent=()=>
{
    const[contentdata,setContentData]=useState([]);
    const[topicdata,setTopicData]=useState([]);
    const[show, setShow]=useState(false);

    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);

    const txtcontent=useRef();
    const txttopic =useRef();

    const AddTopicContent=()=>
    {
        var tid=txttopic.current.value;
        var st={"content_name":txtcontent.current.value,"topics":{"topic_id":tid}}; 
        axios({
            url:"http://localhost:9090/api/addcontent",
            method:'post',
            data:st,
            contentType:'application/json'
        }).then((e)=>
        {
            console.log(e);
            FetchContent();
        })
    }

    useEffect(function()
    {
        FetchTopics();
        FetchContent();
    },[])


    const FetchContent=()=>
    {
        axios({
            url:"http://localhost:9090/api/allcontents",
            method:'get',
            contentType:'application/json'
        }).then((e)=>
        {
            setContentData(e.data);
        })
    }
    

    const FetchTopics=()=>
    {
            axios({
                url:"http://localhost:9090/api/alltopics",
                method:'get',
                contentType:'application/json'
            }).then((e)=>
            {
                console.log(e.data);
                setTopicData(e.data);
            })
    }



    return(
        <div>
            <h4>Topic Content </h4>

            <button className="btn btn-primary mb-4 mt-4" onClick={handleShow}>New Topic Content</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header CloseButton>
                <Modal.Title>Topic</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <div className="form-group" >
                            <label>Topic Name</label>
                            <select ref={txttopic} className="form-control">
                            <option selected disabled>Select Topic</option>
                                {topicdata.map((d,k)=>(
                                    <option key={k} value={d.topic_id}>{k+1}. {d.topic_name}</option>
                                ))}    
                            </select>
                        </div>
                    <br/>
                <div className="form-group">
                    <label>Content Name</label>
                    <input type="text" className="form-control" placeholder="content name" ref={txtcontent} />
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        close 
                    </Button>
                    <Button variant="primary" onClick={()=>AddTopicContent()} >
                        Submit 
                    </Button>
                </Modal.Footer>
            </Modal>

            <table className="table table-bordered">
            <thead>
                <tr className="table-primary">
                    <th>Sr no</th>
                    <th>Content Name</th>
                    <th>Topic Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {contentdata.map((d,k)=>(
                    <tr key={k}>
                        <td>{k+1}</td>
                        <td>{d.content_name}</td>
                        <td>{d.topics.topic_name}</td>
                        <td><button className="btn btn-info" >Edit</button></td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}