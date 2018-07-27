
import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCH_DATA, ADD_HEROE} from '../constants'
import getDataApi from '../api/index'

export function addHeroe(heroe){
	const action = {
		type: ADD_HEROE,
		heroe,
	}
	console.log('action in addheroe', action)
	return action
}

export const getData = () => {
	return {
		type: 'FETCHING_DATA'
	}
}

export const getDataSuccess = data => {
	return {
		type: 'FETCHING_DATA_SUCCESS',
		data
	}
}

export const getDataFailure = () => {
	return {
		type: 'FETCHING_DATA_FAILURE'
	}
}

export const fetchData = () => {
	const URL = "http://api.tvmaze.com/schedule?country=US&date=2014-12-01"
	return (dispatch) => {
		dispatch(getData())
		getDataApi(URL)
			.then(([response, json]) => {
				dispatch(getDataSuccess(json))
			}) 
			.catch((err) => console.log(err))
	}
}