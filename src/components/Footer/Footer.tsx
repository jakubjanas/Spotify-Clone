import React from 'react';
import './Footer.css';
import CurrentSong from '../CurrentSong/CurrentSong';
import Player from '../Player/Player';
import PlayerOptions from '../PlayerOptions/PlayerOptions';
import './Footer.css';
import { Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <Row>
            <Col xs="3">
                <CurrentSong />
            </Col>
            <Col xs="6">
            <   Player />
            </Col>
            <Col>
                <PlayerOptions />
            </Col>
        </Row>
    )
};

export default Footer;