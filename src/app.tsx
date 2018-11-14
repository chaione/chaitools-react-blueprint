import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'

import { AppContainer } from 'react-hot-loader'
import Base from './Base'

import configureStore from './configureStore'
const { store } = configureStore()

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  )
}

render(Base)

if (module.hot) {
  module.hot.accept('./Base', () => { render(require('./Base').default) })
}
