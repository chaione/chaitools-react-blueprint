import * as React from 'react'

export interface BaseProps {}

export class Base extends React.Component<any, undefined> {
  render () {
    return (
      <div className='base-container'>
        Hello World!
      </div>
    )
  }
}
