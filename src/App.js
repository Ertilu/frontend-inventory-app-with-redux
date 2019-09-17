import React from 'react'
import './styles/global.css'
import { Provider } from 'react-redux'
import store from './store'
import Main from './layouts/Main'
import Navbar from './layouts/Navbar'


// import { getProducts } from './actions/productActions'
// import { getPermissions } from './actions/permissionActions'
// store.dispatch(getPermissions())
// store.dispatch(getProducts())

const App = () => (
  <Provider store={store}>
    <Navbar />
  </Provider>
)

export default App
