import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {autoRehydrate} from 'redux-persist'

import reducer from './reducers'

const configureStore = () => {
  if (process.env.NODE_ENV === 'development') {
    return createStore(
      reducer,
      composeWithDevTools(
        applyMiddleware(thunk),
        autoRehydrate()
      )
    )
  }

  return createStore(
    reducer,
    compose(
      applyMiddleware(thunk),
      autoRehydrate()
    )
  )
}

export default configureStore

