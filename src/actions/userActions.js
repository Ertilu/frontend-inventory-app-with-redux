import { API_URL } from '../api';
import axios from 'axios';
import {
    LOGIN,
    REGISTER
} from './actionTypes'

export const login = (data) => {
  return{
      type: 'LOGIN',
      payload: axios.post(`${API_URL}/user/login`, data)
                    .then(response => (localStorage.setItem("token", response.data.token)))
  }
}
  
  export function loginSuccess(payload) {
    return { type: LOGIN, payload }
  }

  export function register(payload) {
    return dispatch => {
      axios
        .post(`${API_URL}/user/register`, payload)
        .then(() => dispatch(registerSuccess(payload)))
        .catch(error => console.error('register failed:', error))
    }
  }
  
  export function registerSuccess(payload) {
    return { type: REGISTER, payload }
  }