import axios from "axios";
axios.defaults.withCredentials = true;
export const createPost =async (data)=>  await axios.post("http://localhost:5000/post", data,{
    headers:{
        "Content-Type":"multipart/form-data"
    }
});

export const getAllPost= async ()=> await axios.get("http://localhost:5000/getPost");

export const getProfilePost = async ()=> await axios.get("http://localhost:5000/getProfilePost");