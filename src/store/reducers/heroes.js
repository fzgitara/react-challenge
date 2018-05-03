import { READ_DATA_HEROES } from '../action.types'

const reducerHeroes = (state=[], action) => {
  switch (action.type) {
    case READ_DATA_HEROES:
      return [...action.payload]
    default:
      return state
  }
}

export default reducerHeroes;