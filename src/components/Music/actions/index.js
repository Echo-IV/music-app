import { PLAY_MUSIC } from '../actionTypes'

export const playMusic = selectedMusic => ({
  type: PLAY_MUSIC,
  selectedMusic
})
