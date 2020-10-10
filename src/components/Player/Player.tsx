import React from 'react';
import './Player.css';
import { ReactComponent as NextIcon } from '../../assets/icons/nextIcon.svg';
import ProgressBar from './ProgressBar/ProgressBar';
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
            <ProgressBar />
        </div>
    );
}

export default Player;