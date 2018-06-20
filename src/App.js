import React from 'react'
import Percentage from './components/Percentage'
import logo from './logo.svg'
import './App.css'

const App = () => (
	<div className='App'>
		<header className='App-header'>
			<img src={ logo } className='App-logo' alt='logo' />
			<h1 className='App-title'>Welcome to React</h1>
		</header>
		<Percentage />
	</div>
)

export default App
