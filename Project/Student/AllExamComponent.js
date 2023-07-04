import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

export const AllExam = () => {
    const[contentdata,setTopic]= useState([]);
    const [start_data, setStartDate] = useState(new Date().toLocaleDateString());
    const [start_time, setStartTime] = useState('');
    const [end_time, setEndTime] = useState('');
    const [student_data, setStudentData] = useState([]);
    const [useroption, setUserOption] = useState([]);
    const [questiondata, setQuestionData] = useState([]);
    const question_id = useRef();

    useEffect(function(){
        GetTopic();
    },[])

    const GetTopic = () => {
        axios({
            url: 'http://localhost:9090/api/topic',
            method: 'get',
            contentType: 'application/json'
        }).then(e => {
            // console.log(e)
            setTopic(e.data)
        })
    }

    const TopicWiseQuestion = () => {
        setStartTime(new Date().toLocaleTimeString())
        let id = question_id.current.value;
        axios({
            url: 'http://localhost:9090/api/examquestion/' + id,
            method: 'get',
            contentType: 'application/json'
        }).then((e) => {
            setQuestionData(e.data);
        })
    }

    const SubmitedOption=(question_id,op)=>{
        var st = {"Content_questions":{"question_id":question_id},"submitted_option_number":op,"exam_details":{"exam_id":student_data.exam_id}}
        var data = useroption;
        var index = -1;
        data.forEach(function(d,k){
            console.log("index= "+k)
            console.log("index 2= " + question_id)
            if(d.Content_questions.question_id == question_id){
                index = k;
            }
        })

        if(index !== -1){
            data[index]=st;
        }
        else{
            data.push(st);
        }
    }


    return (
        <div>
            <h2> Student Get Exam </h2>
            <div className="row form-group">
                <label>Topics</label>
                <div className="col-md-3">
                    <select ref={question_id}>
                        <option selected disabled value="select topic">Select Topic</option>
                        {questiondata.map((d, k) => (
                            <option key={k} value={d.topic_id}>{d.topic_name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                <button className="btn btn-outline-secondary" value="solve" onClick={() => TopicWiseQuestion()}></button>
            </div>
            <hr />
            <div>
                {questiondata.map((d, k) => {
                    return (
                        <div>
                            <h6>{k + 1}.{d.questions}</h6>
                            <Form.Check
                                type="radio"
                                label={d.option1}
                                name={d.question_id}
                                onChange={()=>SubmitedOption()}
                                value={d.option1}
                            />
                        </div>
                    )
                })

                }
            </div>

        </div>
    )
}