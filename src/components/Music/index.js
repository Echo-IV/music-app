import React, { Component, Fragment } from 'react'
import MusicTable from './components/MusicTable/containers'
import Player from './components/Player'
import Add from '@material-ui/icons/Add'
import Cancel from '@material-ui/icons/Cancel'
import { func, string } from 'prop-types'
import { Wrapper } from './styledComponents'

export default class Music extends Component {
  static propTypes = {
    playMusic: func,
    selectedMusic: string
  }

  static defaultProps = {
    playMusic: () => undefined,
    selectedMusic: ''
  }

  render() {
    const { playMusic, selectedMusic } = this.props

    return (
      <Fragment>
        <Wrapper>
          <MusicTable play={playMusic} actionIcon={<Add />} />
        </Wrapper>
        <Wrapper>
          <MusicTable play={playMusic} actionIcon={<Cancel />} />
        </Wrapper>
        <Player src={selectedMusic} />
      </Fragment>
    )
  }
}
