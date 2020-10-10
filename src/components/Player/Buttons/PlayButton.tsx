import React, { useState } from 'react';
import { ReactComponent as PlayIcon } from '../../../assets/icons/playIcon.svg';
import { ReactComponent as PauseIcon } from '../../../assets/icons/pauseIcon.svg';

const PlayButton = () => {
    const [isActive, setIsActive] = useState(false);

    return isActive ? 
    <PlayIcon className={'playIcon'} onClick={() => setIsActive(prev => !prev)}/> 
    : 
    <PauseIcon className={'playIcon'} onClick={() => setIsActive(prev => !prev)} />
}

export default PlayButton;