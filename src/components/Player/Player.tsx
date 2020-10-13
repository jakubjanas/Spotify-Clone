import React from 'react';
import './Player.css';
import { ReactComponent as NextIcon } from '../../assets/icons/nextIcon.svg';
import SongProgressBar from './SongProgressBar/SongProgressBar';
import ShuffleButton from './Buttons/ShuffleButton';
import RepeatButton from './Buttons/RepeatButton';
import PlayButton from './Buttons/PlayButton';

const Player = () => {
    return (
        <div className={'player'}>
            <ShuffleButton />
            <NextIcon className={'previousIcon'}/>
            <PlayButton />
            <NextIcon className={'nextIcon'}/>
            <RepeatButton />
            <SongProgressBar />
        </div>
    );
}

export default Player;