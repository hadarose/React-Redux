import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";
/*import appReducer from "./Example_Counter_Btw_Bros/Reducer";*/
import appReducer from "./Ex09_React_Redux/Reducer";
/*import mainReducer from "./Yaniv_Ex_09/Ex9_reducer";*/

const appStore = createStore(appReducer);

ReactDOM.render(
 <Provider store = {appStore} >
    <App />
  </Provider>
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
