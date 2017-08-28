import React, { Component } from 'react'
import State from '../containers/state'
import Button from '../containers/button'

class App extends Component {
	render(){
		return(
			<div>
				<State />
				<Button />
			</div>
		)
	}
}

export default App