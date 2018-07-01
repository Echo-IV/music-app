import {
  ADD_MUSIC_TO_PLAYLIST,
  REMOVE_MUSIC_FROM_PLAYLIST,
  GET_MUSIC_REQUEST
} from '../actionTypes'

export const getMusic = musicList => ({
  type: GET_MUSIC_REQUEST,
  musicList
})

export const addMusic = music => ({
  type: ADD_MUSIC_TO_PLAYLIST,
  music
})

export const removeMusic = id => ({
  type: REMOVE_MUSIC_FROM_PLAYLIST,
  id
})
