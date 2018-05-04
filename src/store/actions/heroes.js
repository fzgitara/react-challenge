import { READ_DATA_HEROES_PENDING, READ_DATA_HEROES_SUCCESS, READ_DATA_HEROES_ERROR } from '../action.types'
import axios from 'axios'

export const getHeroes = () => {
  return dispatch => {
    dispatch(getHeroesPending())
    axios.get('https://api.opendota.com/api/heroStats').then(response => {
      dispatch(getHeroesSuccess(response.data))
    }).catch(error => dispatch(getHeroesError(error)))
  }
}

const getHeroesPending = () => ({
  type: READ_DATA_HEROES_PENDING
})

const getHeroesSuccess = (data) => ({
  type: READ_DATA_HEROES_SUCCESS,
  payload: data
})

const getHeroesError = (error) => ({
  type: READ_DATA_HEROES_ERROR
})