import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import App from './components/app'

let initialState = {
	init: [{
		id:0,
		state:"init"
	}],
	active: {
		id:1,
		state: "active"
	}
}

let store = configureStore(initialState);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)