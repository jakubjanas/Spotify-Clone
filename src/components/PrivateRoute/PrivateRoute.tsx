import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const isAuthenticated = true;

export const PrivateRoute = ({ children, ...props }: Props) => {
	return (
		<Route
			{...props}
			render={() =>
				isAuthenticated ? children : <Redirect to={'/unathorize'} />
			}
		/>
	);
};

type Props = {
	children: JSX.Element;
} & RouteProps;
