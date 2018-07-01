import { createStore } from 'redux'

import rootReducers from './core/reducers'

export const store = createStore(rootReducers)
