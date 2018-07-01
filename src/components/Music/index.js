import React, { Component, Fragment } from 'react'
import MusicTable from './components/MusicTable/containers'
import Player from './components/Player'
import Add from '@material-ui/icons/Add'
import Cancel from '@material-ui/icons/Cancel'
import { Wrapper } from './styledComponents'

export default class Music extends Component {
  static propTypes = {
    src: string
  }

  static defaultProps = {
    src: ''
  }

  render() {
    const { src } = this.props

    return (
      <Fragment>
        <Wrapper>
          <MusicTable actionIcon={<Add />} />
        </Wrapper>
        <Wrapper>
          <MusicTable actionIcon={<Cancel />} />
        </Wrapper>
        <Player src={src} />
      </Fragment>
    )
  }
}
