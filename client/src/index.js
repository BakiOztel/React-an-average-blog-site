import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import thunk from "redux-thunk";
import reducers from "./Store/reducers/index.js";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";


const store = createStore(reducers, applyMiddleware(thunk));




ReactDOM.render(

  <Provider store={store} >
      <App />
  </Provider>,
  document.getElementById('root')
);