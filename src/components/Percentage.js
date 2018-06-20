import React, { Component } from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

export default class Percentage extends Component {
	state = {
		value: { min: 25, max: 50 }
	}

	render() {
		return (
			<div>
				<InputRange
					maxValue={ 100 }
					minValue={ 0 }
					value={ this.state.value }
					onChange={ value => this.setState({ value }) }
				/>
			</div>
		)
	}
}
