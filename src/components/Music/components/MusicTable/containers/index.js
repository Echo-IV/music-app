import MusicTable from '../'
import { connect } from 'react-redux'
import { getMusic, addMusic, removeMusic } from '../actions'

const mapStateToProps = ({ music }) => ({
  music: music.musicList,
  playlist: music.playlist
})

const mapDispatchToProps = {
  getMusic,
  addMusic,
  removeMusic
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicTable)
