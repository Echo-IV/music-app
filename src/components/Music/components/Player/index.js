import React, { Component } from 'react'
import { string } from 'prop-types'

export default class Player extends Component {
  static propTypes = {
    src: string
  }

  static defaultProps = {
    src: ''
  }

  render() {
    const { src } = this.props

    return (
      <audio controls="controls">
        <source src={src} type="audio/mpeg" />
      </audio>
    )
  }
}