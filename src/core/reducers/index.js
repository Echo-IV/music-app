import { combineReducers } from 'redux'

import MusicTableReducer from '../../components/Music/components/MusicTable/reducers'

import MusicReducer from '../../components/Music/reducers'

const musicApp = combineReducers({
  musicTable: MusicTableReducer,
  music: MusicReducer
})

export default musicApp
