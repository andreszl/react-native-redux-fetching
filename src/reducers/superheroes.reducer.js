import { ADD_HEROE } from '../constants'

import data  from '../data/heroes.json'


const superData = (action) => {
	return {
		id: Math.random(),
		heroe: action.heroe
	}
}
const heroes = (state=[], action) => {
	let heroe = null
	switch(action.type){
		case ADD_HEROE:
			heroe = [...state, superData(action)]
			console.log('heroe as state in store', heroe)
			return heroe
        default :
            // console.log('heroes as state in store')
			return state = data
	}
}

export default heroes