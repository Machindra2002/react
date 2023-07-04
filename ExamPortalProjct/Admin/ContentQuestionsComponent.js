import React from "react";
import { Button,Modal } from "react-bootstrap";
import { useState,useEffect,useRef } from "react";
import axios from "axios";
export const ContentQuestion=()=>
{
    
    const[questiondata,setQuestionData]=useState([]);
    const[topicdata,setTopicData]=useState([]);
    const[contentdata,setContentData]=useState([]);
    const[show, setShow]=useState(false);

    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);

    const txtcontent=useRef();
    const txttopic =useRef();
    const txtquestion=useRef();
    const txt1=useRef();
    const txt2=useRef();
    const txt3=useRef();
    const txt4=useRef();
    const txtcr=useRef();

    useEffect(function()
    {
        FetchQuestions();
        FetchTopics();
        FetchContent();
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




    const FetchQuestions=()=>
    {
            axios({
                url:"http://localhost:9090/api/allquestions",
                method:'get',
                contentType:'application/json'
            }).then((e)=>
            {
                console.log(e.data);
                setQuestionData(e.data);
            })
    }


    const AddQuestion=()=>
    {
        var tid=txttopic.current.value;
        var cid=txtcontent.current.value;
        var op1=txt1.current.value;
        var op2=txt2.current.value;
        var op3=txt3.current.value;
        var op4=txt4.current.value;
        var ans=txtcr.current.value;
        var st={"questions":txtquestion.current.value,"option1":op1,"option2":op2,"option3":op3,"option4":op4,
                "correct_option":ans,"contents":{"content_id":cid},"topics":{"topic_id":tid}}; 
        axios({
            url:"http://localhost:9090/api/addquestion",
            method:'post',
            data:st,
            contentType:'application/json'
        }).then((e)=>
        {
            console.log(e);
            FetchContent();
            FetchTopics();
        })
    }


    return(
        <div>
            <h4>ContentQuestion Section</h4>
            <button className="btn btn-primary mb-4 mt-4" onClick={handleShow}>Add Question</button>
            <br/><br/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header CloseButton>
                <Modal.Title>Content Questions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row" >
                    <div className="form-group col-md-4">
                        <label>Select Topic</label>
                        <select ref={txttopic} className="form-control">
                            <option selected disabled>Select Topic </option>
                                {topicdata.map((d,k)=>(
                                    <option key={k} value={d.topic_id}>{d.topic_name}</option>
                                ))}    
                            </select>
                    </div>

                    <div className="form-group col-md-4">
                        <label>Select Content</label>
                        <select ref={txtcontent} className="form-control">
                            <option selected disabled>Select Content </option>
                                {contentdata.map((d,k)=>(
                                    <option key={k} value={d.content_id}>{d.content_name}</option>
                                ))}    
                            </select>
                    </div>

                    <div className="form-group col-md-4">
                        <label>Select Level</label>
                        <input type="text" className="form-control" placeholder="Select Level"  />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="form-group">
                        <label>Question</label>
                        <input type="text" className="form-control" placeholder="Question" ref={txtquestion}  />
                    </div>
                    
                    <div className="form-group col-md-3"  >
                        <label>option 1</label>
                        <input type="text" className="form-control" placeholder="option1" ref={txt1}  />
                    </div>
                    <div className="form-group col-md-3">
                        <label>option 2</label>
                        <input type="text" className="form-control" placeholder="option2" ref={txt2}  />
                    </div>
                    <div className="form-group col-md-3">
                        <label>option 3</label>
                        <input type="text" className="form-control" placeholder="option3" ref={txt3}  />
                    </div>
                    <div className="form-group col-md-3">
                        <label>option 4</label>
                        <input type="text" className="form-control" placeholder="option4" ref={txt4}  />
                    </div>
                    </div>
                    <div className="form-group">
                        <label>correct option</label>
                        <input type="text" className="form-control" placeholder="correct answer" ref={txtcr}  />
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        close 
                    </Button>
                    <Button variant="primary" onClick={()=>AddQuestion()} >
                        Submit 
                    </Button>
                </Modal.Footer>
            </Modal>


            <table className="table table-bordered" >
            <thead>
                <tr className="table-primary">
                    <th>Sr no</th>
                    <th>Question</th>
                    <th>option1</th>
                    <th>option2</th>
                    <th>option3</th>
                    <th>option4</th>
                    <th>correct option</th>
                    <th>content name</th>
                    <th>topic</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {questiondata.map((d,k)=>(
                    <tr key={k}>
                        <td>{k+1}</td>
                        <td>{d.questions}</td>
                        <td>{d.option1}</td>
                        <td>{d.option2}</td>
                        <td>{d.option3}</td>
                        <td>{d.option4}</td>
                        <td>{d.correct_option}</td>
                        <td>{d.contents.content_name}</td>
                        <td>{d.contents.topics.topic_name}</td>
                        <td><button className="btn btn-info">Edit</button>
                        
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}