import { combineReducers } from "redux";
import userReducers from "./userReducers.js";
import postReducers from "./postReducers.js";


export default combineReducers({userReducers,postReducers});