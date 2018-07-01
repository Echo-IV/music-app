import MusicTable from '../'
import { connect } from 'react-redux'
import { getMusic, addMusic, removeMusic } from '../actions'

const mapStateToProps = ({ musicTable }) => ({
  music: musicTable.musicList,
  playlist: musicTable.playlist
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
