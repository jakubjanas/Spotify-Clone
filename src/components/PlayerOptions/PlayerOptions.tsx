import React from 'react';
import './PlayerOptions.css';
import Playlist from './Buttons/Playlist';
import { ReactComponent as WorkstationIcon } from '../../assets/icons/workstationIcon.svg';
import Volume from './Buttons/Volume';


const PlayerOptions = () => {
    return (
        <div className={'playerOptions'}>
            <Playlist />
            <WorkstationIcon className={'icon'}/>
            <Volume />
        </div>
    );
}

export default PlayerOptions;