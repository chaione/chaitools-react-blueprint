import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Landing from './components/Landing'
import Products from './components/Products'
import About from './components/About'

export default class Base extends React.Component<any, undefined> {
  render () {
    return (
      <Router>
        <div className='root-container'>
          <ul>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/products'> Products </Link> </li>
            <li> <Link to='/about'> About </Link> </li>
          </ul>

          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/products' exact component={Products} />
            <Route path='/about' exact component={About} />
          </Switch>
        </div>
      </Router>
    )
  }
}
