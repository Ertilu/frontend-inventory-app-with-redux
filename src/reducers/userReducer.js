import {
    LOGIN, 
    REGISTER
  } from '../actions/actionTypes'

  const initState = {
    usersProfile:{},
    errMessage:'',
    message:'',
    isLoading:false,
    isRejected:false,
    isFulfilled:false
  }
  
const users = (state = [], action) => {
    switch (action.type) {
      case 'LOGIN_PENDING':
        return{
            ...state,
            isLoading:true,
            isRejected:false,
            isFulfilled:false
        }
      case 'LOGIN_REJECTED':
        return{
            ...state,
            isLoading:false,
            isRejected:true,
            errMessage: action.payload.response.data.message
        }
        case 'LOGIN_FULFILLED':
          return{
              ...state,
              isLoading:false,
              isFulfilled:true,
              token: action.payload
          }
      case LOGIN:
        return [...state, ...action.payload]
      case REGISTER:
        return [...state, action.payload]
      default:
        return state
    }
  }

  export default users