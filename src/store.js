import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import Rpm from 'redux-promise-middleware'

const middleware = [thunk]
const enhancers = []
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers)
)

export default store
