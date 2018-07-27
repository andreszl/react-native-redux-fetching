
import {combineReducers} from 'redux'
import superheroesReducer from './superheroes.reducer.js'
import fetchReducer from './fetch.reducer.js'

export default combineReducers({
    heroes: superheroesReducer,
    fetchReducer
})