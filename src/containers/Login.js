import React, { Component } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {login} from '../actions/userActions'
import {connect} from 'react-redux'
import '../styles/login.css'

export class Login extends React.Component {
  /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */

  state = {
      username: '',
      password: '',
      token: localStorage.getItem("token")
  }

  /* Fired off every time the use enters something into the input fields */
  _handleChange = (e) => {
      this.setState(
          {
              [e.target.name] : e.target.value
          }
      )
  }

  handlerSubmit = () => {
    window.event.preventDefault();
    this.props.dispatch(login(this.state))
    //   this.setState({
    //     token: this.props.users.token
    //   })

    const token = localStorage.getItem('token');
    if (token == undefined || token == '') {
      confirmAlert({
        title: "Access Denied!",
        message: "Login Again?",
        buttons: [
          {
            label: "Yes",
            onClick: () => {}
          },
          {
            label: "No",
            onClick: () => {
              this.props.history.push("/home");
            }
          }
        ]
      })
      localStorage.removeItem('token'); 
      ;
    } else {
      // document.location.href='../components/products.js';
      window.location.replace('/products')
    }
  };

  handleClearForm = event => {
    event.preventDefault()
    this.setState({ 
      'username': '',
      'password': '',
      'token': ''
     })
  }

  render() {
      return (
          <React.Fragment>
              <div className="main-wrapper semuaform">
                  <div className="box">
                      <a href="/" style={{fontSize: '50px'}}>X</a>
                      <div className="box-header">
                          <h1 className="title tulisan">Login</h1>
                      </div>
                      <form className="box-form form" onSubmit={this.handlerSubmit}>
                          <input
                              className="form-item"
                              placeholder="Username"
                              name="username"
                              type="text"
                              onChange={this._handleChange}
                          />
                          <input
                              className="form-item"
                              placeholder="Password"
                              name="password"
                              type="password"
                              onChange={this._handleChange}
                          />
                  
                    <button className="form-submit title btn btn-success" onClick={this.handlerSubmit}>Login</button>
               
                      </form>
                      {/* <Link className="link" to="/signup">Don't have an account? <span className="link-signup">Signup</span></Link>
                      <Route path="./signup" component={Signup} /> */}
                  </div>
                  {/* <div className="signiture">
                      <h1>Template Built & Designed by Roman Chvalbo</h1>
                  </div> */}
              </div>
   
          </React.Fragment>
      );
  }

}

const mapStateToProps = state => {
    return{
      users: state.users
    }
  }
  
  export default connect(mapStateToProps)(Login);
  