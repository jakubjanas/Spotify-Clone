import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { HomePage, LibraryPage, LoginPage, SearchPage } from './pages';
import { PrivateRoute } from './lib';
import {
	AuthenticateContext,
	AuthenticateProvider,
} from './lib/Authenticate/AuthenticateContext';

function App() {
	return (
		<Router>
			<AuthenticateContext.Provider value={false}>
				<Route exact path='/' component={LoginPage} />
				<PrivateRoute path='/home' component={HomePage}></PrivateRoute>
				<Route path='/search' component={SearchPage}></Route>
				<Route path='/library' component={LibraryPage}></Route>
			</AuthenticateContext.Provider>
		</Router>
	);
}

export default App;
