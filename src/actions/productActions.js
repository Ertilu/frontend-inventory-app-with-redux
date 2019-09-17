import { API_URL } from '../api'
import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from './actionTypes'
import axios from 'axios'

const token = localStorage.getItem("token");

export const getProducts = () => {
  const data = [
    localStorage.getItem('search'), 
    localStorage.getItem('by'),
    localStorage.getItem('type'),
    localStorage.getItem('page')
  ]; 

  const type = data[2] === null ? 'ASC' : data[2];   
  const orderBy = data[1] !== null ? '&by='+data[1]+'&type='+type : '&by=pId&type=ASC';

  const search = data[0] !== null ? `?name=${data[0]}` : '?name=';
  const page = '&page='+data[3];

  return dispatch => {
    axios
      .get(`${API_URL}/products${search}${orderBy}${page}`)
      .then(response => dispatch(getProductsSuccess(response.data.values)))
      .catch(error => console.error('getAPIProducts failed:', error))
  }
}

export function getProductsSuccess(payload) {
  return { type: GET_PRODUCTS, payload }
}

export function createProduct(payload) {
  return dispatch => {
    axios
      .post(`http://localhost:8000/products`, payload, {
        headers: {token: `${token}`}
      })
      .then(() => dispatch(createProductSuccess(payload)))
      .catch(error => console.error('createProduct failed:', error))
  }
}

export function createProductSuccess(payload) {
  return { type: CREATE_PRODUCT, payload }
}

export function updateProduct(payload) {
  return dispatch => {
    axios
      .put(`http://localhost:8000/products/${payload.pId}`, payload, {
        headers: {token: `${token}`}
      })
      .then(() => dispatch(updateProductSuccess(payload)))
      .catch(error => console.error('updateProduct failed:', error))
  }
}

export function updateProductSuccess(payload) {
  return { type: UPDATE_PRODUCT, payload }
}

export function deleteProduct(id) {
  return dispatch => {
    axios
      .delete(`http://localhost:8000/products/${id}`, {
        headers: {token: `${token}`}
      })
      .then(() => dispatch(deleteProductSuccess(id)))
      .catch(error => console.error('deleteProduct failed:', error))
  }
}

function deleteProductSuccess(id) {
  return { type: DELETE_PRODUCT, id }
}
