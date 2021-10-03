import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import thunk from "redux-thunk";
import reducers from "./Store/reducers/index.js";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import { persistStore } from "redux-persist";
// import { PersistGate } from 'redux-persist/integration/react';

const store = createStore(reducers, applyMiddleware(thunk));

//While using the values I use constantly, I keep them in the local Storage so that I don't make requests every time. 
//Of course insignificant values 
// const persistor = persistStore(store);


ReactDOM.render(

  <Provider store={store} >
    {/* <PersistGate persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);