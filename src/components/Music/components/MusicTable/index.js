import React, { Component } from 'react'
import { number, string, func, arrayOf, node, exact } from 'prop-types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core'

export default class MusicTable extends Component {
  static propTypes = {
    music: arrayOf(
      exact({
        id: number,
        name: string,
        src: string
      })
    ),
    actionIcon: node,
    play: func
  }

  static defaultProps = {
    music: [],
    actionIcon: null,
    play: () => undefined
  }

  handleClickPlayButton = src => {
    const { play } = this.props

    play(src)
  }

  renderMusicList = () => {
    const { music, actionIcon, label } = this.props

    return music.map(song => (
      <TableRow key={song.id}>
        <TableCell component="th" scope="row">
          {song.name}
        </TableCell>
        <TableCell>
          <Button onClick={() => this.handleClickPlayButton(song.src)}>
            Play
          </Button>
        </TableCell>
        <TableCell>
          <Button>
            {actionIcon} {label}
          </Button>
        </TableCell>
      </TableRow>
    ))
  }

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Titre</TableCell>
            <TableCell>Lecture</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{this.renderMusicList()}</TableBody>
      </Table>
    )
  }
}
