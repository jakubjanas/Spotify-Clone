import React from 'react';

export const AuthenticateContext = React.createContext(false);

export const AuthenticateProvider = (children: JSX.Element) => {
	return (
		<AuthenticateContext.Provider value={false}>
			{children}
		</AuthenticateContext.Provider>
	);
};

export const AuthenticateConsumer = (childrens: React.ReactNode) => {
	return (
		<AuthenticateContext.Consumer>
            {value => <>}
		</AuthenticateContext.Consumer>
	);
};
