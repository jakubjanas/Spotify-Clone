import { ReactComponent } from '*.svg';
import React from 'react';
import './PlayerOptions.css';
import { ReactComponent as PlaylistIcon } from '../../assets/icons/playlistIcon.svg';
import { ReactComponent as WorkstationIcon } from '../../assets/icons/workstationIcon.svg';
import Sound from './Sound/Sound';


const PlayerOptions = () => {
    return (
        <div className={'playerOptions'}>
            <PlaylistIcon />
            <WorkstationIcon />
            <Sound />
        </div>
    );
}

export default PlayerOptions;