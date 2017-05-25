import * as React from 'react'

const Logo = require('images/logos/chaione.png')

export default class Landing extends React.Component<any, undefined> {
  render () {
    return (
      <div className='page-landing'>
        <div className='top-section'>
          <img src={Logo} />
          <div>Chaitools React Web Template</div>
        </div>
        <div className='bottom-section'>
        </div>
      </div>
    )
  }
}
