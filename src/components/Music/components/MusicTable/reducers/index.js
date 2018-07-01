import {
  ADD_MUSIC_TO_PLAYLIST,
  REMOVE_MUSIC_FROM_PLAYLIST,
  GET_MUSIC_REQUEST
} from '../actionTypes'

const initialState = {
  musicList: [],
  playlist: []
}

const MusicReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_MUSIC_REQUEST:
      return {
        ...state,
        musicList: action.musicList
      }
    case ADD_MUSIC_TO_PLAYLIST:
      return {
        ...state,
        playlist: action.music
      }
    case REMOVE_MUSIC_FROM_PLAYLIST:
      return state.filter(music => music.id !== action.id)

    default:
      return state
  }
}

export default MusicReducer
