import React from 'react';
import './Footer.css';
import { CurrentSong } from '../CurrentSong';
import { Player } from '../Player';
import { PlayerOptions } from '../PlayerOptions';
import './Footer.css';
import { Row, Col } from 'reactstrap';

export const Footer = () => {
	return (
		<Row noGutters={true}>
			<Col xs='3'>
				<CurrentSong />
			</Col>
			<Col xs='6'>
				<Player />
			</Col>
			<Col xs='3'>
				<PlayerOptions />
			</Col>
		</Row>
	);
};
