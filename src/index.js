import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";
import appReducer from "./Redux/Reducer";

const appStore = createStore(appReducer);

ReactDOM.render(
 <Provider store = {appStore} >
    <App />
  </Provider>
 ,
  document.getElementById('root')
);

serviceWorker.unregister();
