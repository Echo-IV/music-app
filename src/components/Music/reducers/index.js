import { PLAY_MUSIC } from '../actionTypes'

const MusicReducer = (state = [], action = {}) => {
  switch (action.type) {
    case PLAY_MUSIC:
      return {
        ...state,
        selectedMusic: action.selectedMusic
      }
    default:
      return state
  }
}

export default MusicReducer
