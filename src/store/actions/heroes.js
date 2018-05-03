import { READ_DATA_HEROES } from '../action.types'

export const getHeroes = (data) => ({
    type: READ_DATA_HEROES,
    payload: data
  })