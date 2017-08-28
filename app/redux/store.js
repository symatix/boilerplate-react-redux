import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

let finalCreateStore = compose(
  applyMiddleware(thunk, createLogger())
)(createStore)


export default function configureStore(initialState = { init: [], active: {} }) {
  return finalCreateStore(rootReducer, initialState)
}