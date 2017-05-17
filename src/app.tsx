import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Base } from './Base'
import { AppContainer } from 'react-hot-loader'

const $rootEl = document.getElementById("root")
const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    $rootEl
  )
}

render(Base)

if (module.hot) {
  module.hot.accept('./Base', () => { render(require('./Base').Base) })
}
