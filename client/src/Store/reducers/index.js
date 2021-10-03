import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import userReducers from "./userReducers.js";
import postReducers from "./postReducers.js";

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['postReducers']
// }

// const rootReducer=combineReducers({userReducers,postReducers});

export default combineReducers({userReducers,postReducers});