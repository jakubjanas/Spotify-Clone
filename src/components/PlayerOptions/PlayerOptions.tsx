import React from 'react';
import './PlayerOptions.css';
import { ReactComponent as PlaylistIcon } from '../../assets/icons/playlistIcon.svg';
import { ReactComponent as WorkstationIcon } from '../../assets/icons/workstationIcon.svg';
import Volume from './Volume/Volume';


const PlayerOptions = () => {
    return (
        <div className={'playerOptions'}>
            <PlaylistIcon />
            <WorkstationIcon />
            <Volume />
        </div>
    );
}

export default PlayerOptions;