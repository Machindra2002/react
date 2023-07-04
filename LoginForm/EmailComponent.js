import axios from "axios";
import React from "react";

export const Email = () => {


    const txtemail = useRef();


    // const [students, setStudent] = useState([]);


    // const AddStudent = () => {
    //     try {
    //         var st = {
    //             "student_name": txtname.current.value,
    //             "email_address": txtemail.current.value,
    //             "mobile_number": txtmobile.current.value,
    //             "profile_photo": txtprofilephoto.current.value,
    //             "city": txtcity.current.value
    //         };
    //         console.log(st);
    //         axios({
    //             url: 'http://localhost:9090/api/studentdeatils',
    //             method: 'post',
    //             data: (st)
    //         }).then((e) => {
    //             console.log(e)
    //             SendMail();
    //             alert("student add successfully");
    //             GetStudent();
    //             Clear();
    //         })
    //     }
    //     catch (ero) {
    //         console.error(ero);
    //     }
    // }


    // const Clear = () => {
    //     txtname.current.value = "";
    //     txtemail.current.value = "";
    //     txtmobile.current.value = "";
    //     txtprofilephoto.current.value = "";
    //     txtcity.current.value = "";
    // }


    const SendMail = () => {
        axios
            .post('http://localhost:9090/api/email', txtemail.current.value)
            .then(function (resp) {
                console.log(resp);
            });
    }


    return (
        <div>

            <div>
                <input type="text" ref={txtemail} onClick={()=>SendMail()}/>
            </div>




        </div>
    )
}