import {
  ADD_MUSIC_TO_PLAYLIST,
  REMOVE_MUSIC_FROM_PLAYLIST,
  GET_MUSIC_REQUEST
} from '../actionTypes'

const initialState = {
  musicList: [
    {
      id: 1,
      name: 'Mecha Maiko - Cold (feat. Dana Jean Phoenix)',
      src: '../../music/cold.mp3'
    },
    {
      id: 2,
      name: 'Slaves - Sockets',
      src: '../../music/sockets.mp3'
    },
    {
      id: 3,
      name: 'Porter Robinson & Madeon - Shelter',
      src: '../../music/shelter.mp3'
    }
  ],
  playlist: []
}

const MusicTableReducer = (state = initialState, action = {}) => {
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

export default MusicTableReducer
