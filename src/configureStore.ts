import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


const configureStore = () => {
  if (process.env.NODE_ENV === 'development') {
    const store = createStore(
      persistedReducer,
      composeWithDevTools(
        applyMiddleware(thunk),
      )
    )
    const persitedStore = persistStore(store)
    return { store, persitedStore }
  }

  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(thunk),
    )
  )
  const persitedStore = persistStore(store)
  return { store, persitedStore }
}

export default configureStore

