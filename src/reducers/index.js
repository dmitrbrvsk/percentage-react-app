import { combineReducers } from 'redux'
import { percentageReducer } from './Percentage'

export default combineReducers({
	percentage: percentageReducer
})
