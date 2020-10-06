import axios from 'axios'
import { GET_CHARACTERS, ERROR } from '../types/charactersTypes'
const API_URL = 'https://rickandmortyapi.com/api/character'

export const getCharacters = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL)
    dispatch({
      type: GET_CHARACTERS,
      payload: response.data.results,
   
    })
  
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Información de usuarios no disponible.',
    })
  }
}
