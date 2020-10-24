import React from 'react';
import ProgressBar from '../../ProgressBar/ProgressBar';
import { ReactComponent as FullVolumeIcon } from '../../../assets/icons/fullVolumeIcon.svg';
import './Volume.css';

const Volume = () => {
    const completed = 20;

    return (
        <div className={'volume'}>
            <FullVolumeIcon />
            <div>
                <ProgressBar completed={completed} />
            </div>
        </div>
    )
}
export default Volume;