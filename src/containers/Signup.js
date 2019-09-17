import React from "react";

/* We want to import our 'AuthHelperMethods' component in order to send a login request */
// import AuthHelperMethods from '../components/auth/AuthHelperMethods';
import { Link } from 'react-router-dom';
import '../styles/login.css'
import axios from "axios";
import AuthHelperMethods from '../components/auth/AuthHelperMethods';
import { connect } from 'react-redux'
import { register } from '../actions/userActions'
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Signup extends React.Component {
  Auth = new AuthHelperMethods();
  state = {
      name: "",
      username: "",
      email: "",
      password: ""
  }

  _handleChange = (e) => {        
      this.setState(
          {
              [e.target.name]: e.target.value
          }
      )
      console.log(this.state);
  }
  
  handleSubmit = event => {
    event.preventDefault()
    // const { name, price, currency } = this.state
    const userData = this.state
    this.props.handleSubmitForm(userData)
    this.handleClearForm(event)  
    confirmAlert({
      title: 'Confirmation',
      message: `Register success do you want to Login now ?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.history.replace('/login')
        },
        {
          label: 'No',
          onClick: () => {} 
        }
      ]
    })
  }

  handleClearForm = event => {
    event.preventDefault()
    this.setState({ 
      'fullName': '',
      'email': '',
      'username': '',
      'password': ''
     })
  }

  signup = () => {
    
  }

  render() {
      return (
        <React.Fragment>
          <div className="main-wrapper semuaform">
              <div className="box">
                <a href="/" style={{fontSize: '50px'}}>X</a>
                  <div className="box-header">
                      <h1 className="title tulisan">Signup</h1>
                  </div>
                  <form className="box-form form">
                  <input
                          className="form-item"
                          placeholder="Your full name"
                          name="name"
                          type="text"
                          onChange={this._handleChange}
                      />
                      <input
                          className="form-item"
                          placeholder="Username"
                          name="username"
                          type="text"
                          onChange={this._handleChange}
                      />
                      <input
                          className="form-item"
                          placeholder="Email"
                          name="email"
                          type="email"
                          onChange={this._handleChange}
                      />
                      <input
                          className="form-item"
                          placeholder="Password"
                          name="password"
                          type="password"
                          onChange={this._handleChange}
                      />
                      <button className="form-submit title btn btn-success" onClick={this.handleSubmit}>Signup</button>
                  </form>
                  {/* <Link className="link" to="/login">Already have an account? <span className="link-signup">Login</span></Link> */}
              </div>
              {/* <div className="signiture">
                  <h1>Template Built & Designed by Roman Chvalbo</h1>
              </div> */}
          </div>
          
      </React.Fragment>
      );
  }

}

const mapDispatchToProps = dispatch => ({
    handleSubmitForm(payload) {
      dispatch(register(payload))
    }
  })
  
  export default connect(null, mapDispatchToProps)(
    Signup
  )