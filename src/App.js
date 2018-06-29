import React from 'react'
import styled from 'styled-components'
import Percentage from './components/Percentage'
import logo from './logo.svg'
import './App.css'

const Container = styled.div`
	display: flex;
	justify-content: center;
`

const App = () => (
	<div className='App'>
		<header className='App-header'>
			<img src={ logo } className='App-logo' alt='logo' />
			<h1 className='App-title'>Welcome to React</h1>
		</header>
		<Container>
			<Percentage />
		</Container>
	</div>
)

export default App
