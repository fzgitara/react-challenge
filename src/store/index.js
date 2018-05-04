import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger'
import reducerHeroes from './reducers/heroes'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  heroes: reducerHeroes
})

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk, logger))

export default store