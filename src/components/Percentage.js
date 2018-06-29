import React, { Component } from 'react'
import styled from 'styled-components'
import InputRange from 'react-input-range'
import NumericInput from 'react-numeric-input'
import 'react-input-range/lib/css/index.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as percentageAction from '../actions/Percentage'

const Wrapper = styled.div`
	padding: 50px;
	width: 800px;
`

const SliderPercentage = styled.div`
	display: flex;
	justify-content: space-between;
	width: 600px;
	margin: 30px;
`
class Percentage extends Component {
	state = {
		value: 50
	}

	componentDidMount() {
		this.getPercentages()
	}

	getPercentages() {
		this.props.actions.loadPercentages()
	}

	render() {
		const { loading, error } = this.props.percentages

		if (loading) {
			return <div> Loading...</div>
		}

		if (error) {
			return <div>Error: { error }</div>
		}

		return (
			<Wrapper>
				<button>
					Один элемент
				</button>
				<button>
					Два элемента
				</button>
				<button>
					Три элемента
				</button>
				<button>
					Четыре элемента
				</button>
				<button>
					Пять элементов
				</button>
				<SliderPercentage>
					<InputRange
						maxValue={ 100 }
						minValue={ 0 }
						value={ this.state.value }
						onChange={ value => this.setState({ value }) }
					/>
					<NumericInput
						min={ 0 }
						max={ 100 }
						value={ this.state.value }
						onChange={ value => this.setState({ value }) }
					/>
				</SliderPercentage>
				<SliderPercentage>
					<InputRange
						maxValue={ 100 }
						minValue={ 0 }
						value={ this.state.value }
						onChange={ value => this.setState({ value }) }
					/>
					<NumericInput
						min={ 0 }
						max={ 100 }
						value={ this.state.value }
						onChange={ value => this.setState({ value }) }
					/>
				</SliderPercentage>
			</Wrapper>
		)
	}
}

const mapStateToProps = state => ({
	percentages: state.percentage
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(percentageAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Percentage)
