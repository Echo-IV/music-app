import Music from '../'
import { connect } from 'react-redux'
import { playMusic } from '../actions'

const mapStateToProps = ({ music }) => ({
  selectedMusic: music.selectedMusic
})

const mapDispatchToProps = {
  playMusic
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Music)
