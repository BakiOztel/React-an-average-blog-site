import axios from "axios";
axios.defaults.withCredentials = true;
export const signUp = async (user)=> await axios.post("http://localhost:5000/register",user);

export const login = async (user)=> await axios.post("http://localhost:5000/login",user);

export const isLogin= async () => await axios.post("http://localhost:5000/is_logged_in");

export const Logout= async ()=> await axios.post("http://localhost:5000/logout");

