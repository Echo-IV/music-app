import { createStore, compose } from 'redux'

import rootReducers from '../core/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducers, {}, composeEnhancers())
