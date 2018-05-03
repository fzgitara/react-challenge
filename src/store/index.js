import { createStore } from "redux";
import reducerHeroes from './reducers/heroes'

let store = createStore(reducerHeroes, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store