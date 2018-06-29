import {
	FETCH_PERCENTAGES_REQUEST,
	FETCH_PERCENTAGES_SUCCESS,
	FETCH_PERCENTAGES_FAILED
} from '../constants/constants'

const initialState = {
	loading: false,
	percentages: [],
	error: null
}

export const percentageReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PERCENTAGES_REQUEST:
			return {
				...state,
				loading: true,
				error: null
			}
		case FETCH_PERCENTAGES_SUCCESS:
			return {
				...state,
				loading: false,
				percentages: action.payload.results
			}
		case FETCH_PERCENTAGES_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				percentages: []
			}
		default:
			return state
	}
}
