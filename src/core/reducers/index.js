import { combineReducers } from 'redux'

import MusicReducer from '../../components/Music/components/MusicTable/reducers'

const musicApp = combineReducers({
  music: MusicReducer
})

export default musicApp
