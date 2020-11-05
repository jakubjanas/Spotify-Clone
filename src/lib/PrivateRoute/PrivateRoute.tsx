import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AuthenticateContext } from '../Authenticate/AuthenticateContext';

const PrivateRoute = ({
	children,
	isAuthenticated,
	...props
}: PrivateRouteProps) => {
	return (
		<Route
			{...props}
			render={() =>
				isAuthenticated ? children : <Redirect to={'/unathorize'} />
			}
		/>
	);
};

const AuthenticatedPrivateRoute = ({
	...props
}: AuthenticatedPricateRouteProps) => {
	return (
		<AuthenticateContext.Consumer>
			{(isAuthenticated) => (
				<PrivateRoute {...props} isAuthenticated={isAuthenticated} />
			)}
		</AuthenticateContext.Consumer>
	);
};

type PrivateRouteProps = {
	isAuthenticated: boolean;
} & AuthenticatedPricateRouteProps;

type AuthenticatedPricateRouteProps = {
	children: JSX.Element;
} & RouteProps;

export { AuthenticatedPrivateRoute as PrivateRoute };
