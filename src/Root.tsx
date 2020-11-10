import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { HomePage, LibraryPage, LoginPage, SearchPage } from './pages';
import { PrivateRoute } from './lib';

export const Root = () => {
	return (
		<Router>
			<Route exact path='/' component={LoginPage} />
			<PrivateRoute path='/home' component={HomePage}></PrivateRoute>
			<Route path='/search' component={SearchPage}></Route>
			<Route path='/library' component={LibraryPage}></Route>
		</Router>
	);
};
