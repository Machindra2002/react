import axios from "axios";
const baseurl = 'http://localhost:9090/api/';

export const getTopic = async() => {
    const resp = await axios.get(baseurl + 'topic')
    return resp.data
}

export const addTopic = async(data)=>{
    const resp = await axios.post(baseurl + 'topic', data)
    console.log(resp.data);
    return resp.data
}

export const deleteTopic=async(id)=>{
    const resp = await axios.delete(baseurl +'topic/'+id)
    return resp.data
}