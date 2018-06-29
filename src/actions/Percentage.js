import {
	FETCH_PERCENTAGES_REQUEST,
	FETCH_PERCENTAGES_SUCCESS,
	FETCH_PERCENTAGES_FAILED,
	API_ENDPOINT
} from '../constants/constants'

export const loadPercentages = () => {
	return dispatch => {
		dispatch({
			type: FETCH_PERCENTAGES_REQUEST
		})

		fetch(API_ENDPOINT)
			.then(response => {
				return response.json()
			}).then(json => {
				dispatch({
					type: FETCH_PERCENTAGES_SUCCESS,
					payload: {
						results: json
					}
				})
			}).catch(error => {
				dispatch({
					type: FETCH_PERCENTAGES_FAILED,
					payload: error
				})
			})
	}
}
