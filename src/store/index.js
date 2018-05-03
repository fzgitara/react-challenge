import { createStore } from "redux";

const reducerHeroes = (state=[], action) => {
  switch (action.type) {
    case 'READ_DATA_HEROES':
      return [...action.payload]
    default:
      return state
  }
}

let store = createStore(reducerHeroes, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store