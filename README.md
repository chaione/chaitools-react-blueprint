# Template for React web projectss

## Table of Contents

  1. [How to use this project](#how-to-use-this-template)
  1. [React with Redux](#markdown-header-react-with-redux)
  1. [TypeScript and ES6+](#markdown-header-typescript)
  1. [React Router](#markdown-header-react-router)
  1. [Styling with Sass](#markdown-header-styling-with-sass)
  1. [Webpack](#markdown-header-webpack)
  1. [ESLint](#markdown-header-eslint)

## How to use this project

```bash
# cd to the workspace folder
git clone --depth 1 git@bitbucket.org:chaione/web-template-ts-react-webpack.git my-project
cd my-project
yarn
yarn start
```

## React with Redux

React and Redux makes a great combo in structuring scalable web applications. We use React as the view engine and let Redux to help
us manage the system states.

[redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) has been baked into the template as well. It's a useful and handy tool for
developers to be able to inspect and manipulate the store right from the developer console.

## TypeScript and ES6+

TypeScript is the new standard for all future ChaiOne front-end projects. But it's not mandatory.
If you have particular requirements or project needs, ES6 or beyond is still supported in this template through Babel.

## Styling with Sass

Sass is the default styling choices. We follow the widely used 7-1 pattern in most cases.

On top of Sass, React has made the inline class name changes very easy. With the combination of [classnames](https://github.com/JedWatson/classnames) packages,
we can easily add or remove classes based on a component's state or a system state.

A quick example

```jsx

import React from 'react';
import cx from 'classnames';

export default class extends React.Component {
  render() {
    const {date, month} = this.props;

    let dpClasses = cx('dp-date', {
      current: date.month() === month,
      future: date.month() > month,
      past: date.month() < month
    });

    return (
      <div
        className={dpClasses}
        key={date}
        onClick={this.props.updateDate.bind(this, date)}>
        {date.date()}
      </div>
    );
  }
}

```

## Webpack

## ESLint
