import React, { Component, useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AuthenticateContext } from '../Authenticate/AuthenticateContext';

const PrivateRoute = ({
	isAuthenticated,
	component,
	...rest
}: PrivateRouteProps) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect to={'/unathorize'} />
				)
			}
		/>
	);
};

const AuthenticatedPrivateRoute = ({ ...props }: RouteProps) => {
	const isAuthenticated = useContext(AuthenticateContext);

	return <PrivateRoute {...props} isAuthenticated={isAuthenticated} />;
};

type PrivateRouteProps = {
	isAuthenticated: boolean;
} & RouteProps;

export { AuthenticatedPrivateRoute as PrivateRoute };
