import { READ_DATA_HEROES_PENDING, READ_DATA_HEROES_SUCCESS, READ_DATA_HEROES_ERROR } from '../action.types'

const initialState = {
  loading: false,
  data: [],
  error: false
}

const reducerHeroes = (state={...initialState}, action) => {
  switch (action.type) {
    case READ_DATA_HEROES_PENDING:
      return {
        ...state,
        loading: true
      }
    case READ_DATA_HEROES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case READ_DATA_HEROES_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state
  }
}

export default reducerHeroes;