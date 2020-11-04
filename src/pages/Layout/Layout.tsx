import React from 'react';
import { Col, Row } from 'reactstrap';
import { Footer } from '../../components/Footer';
import { SideBar } from '../../components/SideBar';

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Row noGutters>
				<Col xs='2'>
					<SideBar />
				</Col>
				<Col>
					<div className='main-page'>{children}</div>
				</Col>
			</Row>
			<Footer />
		</>
	);
};

type Props = {
	children: JSX.Element;
};
