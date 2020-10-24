import React from 'react';
import ProgressBar from '../../ProgressBar/ProgressBar';
import { ReactComponent as FullVolumeIcon } from '../../../assets/icons/fullVolumeIcon.svg';
import './Buttons.css';

const Volume = () => {
    const completed = 20;

    return (
        <div className={'volume'}>
            <FullVolumeIcon />
            <div className={'regulator'}>
                <ProgressBar completed={completed} />
            </div>
        </div>
    )
}
export default Volume;