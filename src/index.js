import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from './layouts/LoginPage'
import { Provider } from 'react-redux'
import store from './store'

const token = localStorage.getItem('token');

if(token !== '' && token) {
    ReactDOM.render(<App />, document.getElementById('root'))
    registerServiceWorker()
   } else {
    ReactDOM.render(
      <Provider store={store}>
         <LoginPage />
      </Provider>,
      document.getElementById("root")
    )  
   }
