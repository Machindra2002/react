import React, { useEffect, useState,useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
export const Topic=()=>
{
    const[topicdata,setTopicData]=useState([]);
    const[show, setShow]=useState(false);


    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);


    useEffect(function()
    {
        FetchTopics();
    },[])

    
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
    const txttopic=useRef();
    const AddTopic=()=>
    {
        var st={"topic_name":txttopic.current.value}; 
        axios({
            url:"http://localhost:9090/api/addtopic",
            method:'post',
            data:st,
            contentType:'application/json'
        }).then((e)=>
        {
            console.log(e);
            FetchTopics();
        })
    }

    // const UpdateTopic=()=>
    // {
    //     // var st={"topic_name":txttopic.current.value}; 
    //     // axios({
    //     //     url:"http://localhost:9090/api/addtopic",
    //     //     method:'post',
    //     //     data:st,
    //     //     contentType:'application/json'
    //     // }).then((e)=>
    //     // {
    //     //     console.log(e);
    //     //     FetchTopics();
    //     // })

    //         console.log("ganesh");
    // }



    return(
        <div>        
            <h4>Topics</h4>
            <button className="btn btn-primary" onClick={handleShow}>Add Topic</button>
            <br/><br/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header CloseButton>
                <Modal.Title>Topic</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label>Topic Name</label>
                        <input type="text" className="form-control" placeholder="topic name" ref={txttopic} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        close 
                    </Button>
                    <Button variant="primary" onClick={()=>AddTopic()} >
                        Submit 
                    </Button>
                </Modal.Footer>
            </Modal>



            




            <table className="table table-bordered" >
            <thead>
                <tr className="table-primary">
                    <th>Sr no</th>
                    <th>Topic Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {topicdata.map((d,k)=>(
                    <tr key={k}>
                        <td>{k+1}</td>
                        <td>{d.topic_name}</td>
                        <td><button className="btn btn-info">Edit</button> 
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}