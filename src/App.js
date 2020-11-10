import React from 'react';
import './App.css';
import { Root } from './Root';
import { AuthenticateContext } from './lib';

function App() {
	return (
		<AuthenticateContext.Provider value={false}>
			<Root />
		</AuthenticateContext.Provider>
	);
}

export default App;
