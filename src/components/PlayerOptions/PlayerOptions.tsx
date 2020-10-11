import { ReactComponent } from '*.svg';
import React from 'react';
import './PlayerOptions.css';
import { ReactComponent as PlaylistIcon } from '../../assets/icons/playlistIcon.svg';
import { ReactComponent as WorkstationIcon } from '../../assets/icons/workstationIcon.svg';
import { ReactComponent as FullVolumeIcon } from '../../assets/icons/fullVolumeIcon.svg';

const PlayerOptions = () => {
    return (
        <div className={'playerOptions'}>
            <PlaylistIcon />
            <WorkstationIcon />
            <FullVolumeIcon />
        </div>
    );
}

export default PlayerOptions;