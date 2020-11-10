import React from 'react';

export const AuthenticateContext = React.createContext(false);

export const AuthenticateProvider = (children: JSX.Element) => {
	return (
		<AuthenticateContext.Provider value={false}>
			{children}
		</AuthenticateContext.Provider>
	);
};
