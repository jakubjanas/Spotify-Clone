import React from 'react';
import './Footer.css';
import CurrentSong from '../CurrentSong/CurrentSong';
import Player from '../Player/Player';
import PlayerOptions from '../PlayerOptions/PlayerOptions';
import './Footer.css';

const Footer = () => {
    return (
        <div className={'footer'}>
            <CurrentSong />
            <Player />
            <PlayerOptions />
        </div>
    );
}

export default Footer;