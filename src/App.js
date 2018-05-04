import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './rematchConfig'

import HomePage from '../src/components/HomePage'
class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path={'/'} component={HomePage} />
						<Route exact path={'/home'} component={HomePage} />
					</Switch>
				</Router>
			</Provider>
		)
	}
}

export default App
