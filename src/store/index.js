import { createStore } from "redux";

const heroStats = (state=[], action) => {
  switch (action.type) {
    case 'READ_DATA_HEROES':
      return [...state, action.payload]
    default:
      return state
  }
}

let store = createStore(heroStats, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store