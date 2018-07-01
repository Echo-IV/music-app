import { PLAY_MUSIC } from '../actionTypes'

const MusicReducer = (state = [], action = {}) => {
  switch (action.type) {
    case PLAY_MUSIC:
      return {
        ...state,
        music: action.music
      }
    default:
      return state
  }
}

export default Music
