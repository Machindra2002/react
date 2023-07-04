import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import incorrect from "./cross-button.png";
import correct from "./check-mark.png";

export const ShowResults=()=>
{
    
    let[mydata,setTableData]=useState([]);
    let mark=0;
    


    useEffect(function () {
        ShowResultData();
    },[])

    const ShowResultData=()=>
    {
        axios({
            url:"http://localhost:9090/api/getdetailsbyexamid/"+id,
            method:'get',
            contentType:'application/json'
        }).then((e)=>
        {
            console.log(e.data);
            setTableData(e.data)
            console.log("ganesh")
            console.log(mark)
        })
    }

    const{state}=useLocation();
    const{id}=state;
    
    const navigate=useNavigate();
    return(
        <div>

            <div className="mt-4">
                <input type="button" value="back to exam" className="btn btn-info mb-4"onClick={()=>navigate("/student/exam")} />
            </div>
            
            
                <table className="table table-bordered">
                    <thead>
                        <tr className="table-primary">
                            <th >s.no</th>
                            <th>Your Question.</th>
                            <th>submited option</th>
                            <th>correct option</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                            <tbody>
                           
                            
                                {mydata.map((d,k)=>{
                                    let ans=0
                                    var m=0;
                                    if(d.submitted_option_number==d.content_questions.questions)
                                    {
                                        ans=1;
                                        
                                        mark=mark+1;
                                    }
                                    else
                                    {
                                        ans=0;
                                    }
                                    return(
                                        <tr >
                                            <td >{k+1}</td>
                                            <td><h6>{d.content_questions.correct_option}</h6></td>
                                            <td><h6>{d.submitted_option_number}</h6></td>
                                            <td><h6>{d.content_questions.questions}</h6></td>
                                            <td>{ans===1?<img alt="correct"  src={correct} width={30} style={{"display":"block","margin":"0 auto"}}/>:<img alt="incorrect" src={incorrect} width={30} style={{"display":"block","margin":"0 auto"}}/>}</td>
                                        </tr>
                                        
                                    )
                                })}
                                <tr className="table-primary" colspan={3}>
                                    
                                    <td colspan={2}><h4>Your Result</h4></td>
                                    <td colspan={3 }><h4>Total Marks: {mark}</h4></td>
                                </tr>
                            </tbody>
                </table>
        </div>
    )  
}