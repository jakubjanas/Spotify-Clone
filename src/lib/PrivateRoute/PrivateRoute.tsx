import React, { Component, useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AuthenticateContext } from '../Authenticate/AuthenticateContext';

const PrivateRoute = ({
	children,
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

const AuthenticatedPrivateRoute = ({
	...props
}: AuthenticatedPricateRouteProps) => {
	const isAuthenticated = useContext(AuthenticateContext);

	return <PrivateRoute {...props} isAuthenticated={isAuthenticated} />;
};

type PrivateRouteProps = {
	isAuthenticated: boolean;
} & AuthenticatedPricateRouteProps;

type AuthenticatedPricateRouteProps = {
	children: JSX.Element;
} & RouteProps;

export { AuthenticatedPrivateRoute as PrivateRoute };
