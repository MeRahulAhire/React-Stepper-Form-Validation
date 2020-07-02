import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Registration from './public/form/registration'

export class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/" component={Registration} exact />
						
					
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
