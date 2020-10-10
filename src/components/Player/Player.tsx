import React from 'react';
import './Player.css';
import { ReactComponent as RepeatIcon } from '../../assets/icons/repeatIcon.svg';
import { ReactComponent as NextIcon } from '../../assets/icons/nextIcon.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/playIcon.svg';
import ProgressBar from './ProgressBar/ProgressBar';
import ShuffleButton from './Buttons/ShuffleButton';

const Player = () => {
    return (
        <div className={'player'}>
            <ShuffleButton />
            <NextIcon className={'previousIcon'}/>
            <PlayIcon className={'playIcon'}/>
            <NextIcon className={'nextIcon'}/>
            <RepeatIcon className={'repeatIcon'}/>
            {/* <ProgressBar /> */}
        </div>
    );
}

export default Player;