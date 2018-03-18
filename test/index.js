import React, { Component } from 'react'
import Stateless from './Stateless'

export default class Foo extends Component {
  state = {
    foo: 'bar'
  }

  @fakeDecorator
  get random() {
    return Math.random()
  }

  render() {
    return (
      <h1 className="root">
        {hoistingIsAFeature()}
        <Stateless />
      </h1>
    )
  }
}

function hoistingIsAFeature() {
  return 'booyow!'
}

function fakeDecorator() {
  //
}
