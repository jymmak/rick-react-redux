import { createStore, applyMiddleware } from 'redux'
import { GET_CHARACTERS, ERROR } from '../types/charactersTypes'
import thunk from 'redux-thunk'

const INITIAL_STATE = {
  characters: [],
  error: '',
}

const reducer =  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        error: ''
      
      }

    case ERROR:
      return { ...state, error: action.payload }

    default:
      return state
  }
 
}

export default createStore(reducer, applyMiddleware(thunk))
